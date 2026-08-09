---
layout: page
title: NASA RL Sim
description: <strong>Reinforcement learning simulator</strong> for NASA Goddard's CORTEx TurtleBot 4 terrain-adaptive navigation project, training and visualizing a CMAC/TD3 rover-navigation agent in real time. 90.2% arrival rate on a Raspberry Pi 4 with a provably-safe control stack and an 88 KB camera-free terrain classifier.
importance: 2
category: research
tags: [Robotics, AI]
# img: assets/img/projects/recents/nasarl-sim-live.png
---

<div class="row mt-3 mb-3 justify-content-center">
  <div class="col-sm-5">
    {% include figure.liquid path="assets/img/projects/recents/nasarl-sim-live.png" class="img-fluid rounded z-depth-1" zoomable="true" %}
  </div>
</div>

_Completed August 2026 and presented at the NASA Goddard Engineering and Technology Directorate branch presentation and the National Space Club poster session._

This is a NASA Goddard Space Flight Center internship project (Engineering and Technology Directorate, Code 525 Space Club), now formalized as **CORTEx** (Cross-sensor Onboard Reflex & Terrain Exploration), building an RL-driven autonomous navigation system for the TurtleBot 4 that can handle diverse, unstructured terrain. The team split into three subteams: RL agent implementation, simulation development, and environment/sensing; I worked on the RL agent and owned the training simulator, and later designed the terrain-classification system.

I started by standing up the toolchain — TurtleBot 4, ROS 2, Gazebo, RViz2, SLAM, and Nav2 — and surveying RL approaches (SAC, DQN, DDPG, world models, tabular Q-learning) for continuous versus discrete action spaces. A first DDPG agent trained over 5K episodes, which was enough to expose how badly the reward function needed work; the final TD3 + CMAC agent trained 25K+ episodes against dynamic and static obstacles, randomized room sizes and goal poses, and hardware-synced acceleration limits.

I built a MATLAB-based training simulator with a live GUI: a customizable obstacle library (polygonal, square, and circular obstacles), randomized room shapes and boundary generation, and both static and dynamic (moving) obstacles. Simulated lidar renders as a full-circle ray fan around the rover, matching the real TurtleBot 4's scan geometry so trained agents transfer to hardware. Early iterations exposed a toggle between CMAC and DDPG agents with live reward/loss/exploration graphs and save/load for tracks and Q-matrices; the pipeline has since moved past that flat toggle (see below).

Over the course of development I tightened the safety and physics fidelity of the sim: restricting lidar range to a realistic 12m, preventing obstacles from spawning inside the goal pose, adding a soft safety-region penalty around obstacles distinct from the collision penalty, and smoothing acceleration/deceleration so velocity commands ramp instead of jumping instantaneously. I also added path-trail visualization (a solid line for the current episode, dotted for the previous one) to make training behavior easier to inspect at a glance.

I then rebuilt the core agent around a CMAC (Cerebellar Model Articulation Controller) actor, a lookup-table-style function approximator suited to hard real-time control, layered with a Follow-the-Gap Method (FGM) reactive planner and TD3-style training. The FGM layer extracts open bearing "gaps" from the lidar scan (correctly merging any gap that wraps across the scan's seam), scores each gap by goal alignment to pick the best one, and a directional-clearance safety layer gates speed based on the robot's actual heading rather than the single nearest obstacle reading, which is what stops the robot from deadlocking while rotating in place.

The finished control stack layers six modules, each independently toggleable so its contribution to the trajectory can be ablated in the GUI: Follow-the-Gap for reactive gap selection, TD3/CMAC for the learned policy, DWA kinodynamic limits, ORCA for dynamic-obstacle reciprocal avoidance, a QP solver that arbitrates between the policy's preferred action and the safety constraints, and a CBF-CLF safety layer that provides the hard collision guarantee, plus action masking and an MPC cost term. A Kalman filter fuses lidar, IR, IMU, and wheel encoders into the state estimate; on the sensing side I sectorized the lidar returns and partitioned the robot body into regions for depth scanning, so clearance is reasoned about per-direction instead of per-ray. The whole thing is custom — no Nav2 — and runs in real time within the Raspberry Pi 4B's compute budget, deployed straight from the MATLAB sim to hardware.

To scale up data collection I split the simulator into two paths that share identical environment/policy/reward code: the original live GUI for interactive training and debugging, and a new graphics-free/headless collector that rolls out episodes without rendering for dramatically faster large-scale data generation. I also added a trajectory logging system that records every step of an episode, pose, goal distance, gap alignment, emergency-stop/escape events, and terminal outcome (arrived/crashed/timeout), for training diagnostics and for the hardware team to debug deployment. A smoke-test suite exercises the full pipeline end to end (FGM gap extraction, reward math, actor export/reload, and evaluation) with no GUI or MATLAB toolboxes required.

The simulator work paid off directly in the final numbers. Parallel workers plus the headless collector cut training from 350s to 35s per 100 episodes, a 10x speedup. On the trained policy, episodes where the learned actor stayed in control (safety layers overriding it less than half the time) reached the goal 90.2% of the time, versus 30.1% for episodes that fell back to being FGM-led, which is the clearest evidence that the RL layer is doing real work rather than riding on the reactive planner.

<div class="row mt-3 mb-3 justify-content-center">
  <div class="col-sm-9">
    {% include figure.liquid path="assets/img/projects/recents/nasarl-arrival-rate.png" class="img-fluid rounded z-depth-1" zoomable="true" %}
  </div>
</div>

The other half of my work was the supplemental sensing layer: an HDC-based artificial immune system paired with a camera-free terrain classifier. Sensor readings are random-projected into 10,000-dimensional hypervectors and bundled into a "memory of healthy" — 54,000+ readings compressed into 88 KB, roughly 1,700x smaller than a comparable ResNet-101-class classifier at ~150 MB, and small enough to sit onboard the Pi alongside everything else. Live readings are compared against that memory to do three jobs at once: flag and isolate sensor faults (it passed 180/180 automated tests against 7 simulated fault types, and auto-corrects wheel-velocity errors in real time), separate internal robot state from external environment changes, and classify the terrain underfoot with no camera and no ground-truth labels.

Classification accuracy climbs with motion (worst case is a stopped robot on textured/carpet terrain, at 61.5%, vs. 94–99% while driving), and the HDC memory-similarity matrix shows the same terrain reads as highly self-consistent across stopped/straight/turning states while still separating cleanly from other terrains. At runtime, crossing from a smooth surface onto a high-slip one triggers a reclassification that drops the speed multiplier exactly where slip risk is higher, then restores full speed back on easy ground — all while landing within about 2% of ideal navigation performance.

For hardware, I wrote the TurtleBot 4 deployment script: reading and formatting live sensor data, distance-based motion commands with tunable distance/speed parameters, and built-in emergency safety stops, plus the configuration docs that get deployment time under two minutes. Getting there meant calibrating the TB4's sensors and chasing down jittery movement and a persistent left-turn bias, eventually fixed with a factory reset plus custom diagnostic scripts.

<div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin: 1.5rem 0;">
  <img src="{{ "assets/img/projects/recents/nasarl-terrain-accuracy.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
  <img src="{{ "assets/img/projects/recents/nasarl-hdc-similarity.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
</div>

Alongside the engineering, the internship ran on communication: weekly progress briefings to Code 525, the final branch presentation on 8/6/26, a poster co-authored with the five other interns, and a keynote at the National Space Club & Foundation luncheon, where I spoke about the internship, my research interests, and career goals to 100+ attendees including NASA researchers and the Space Club President.

The final poster:

<div class="row mt-3 mb-3 justify-content-center">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/projects/recents/nasarl-cortex-poster.png" class="img-fluid rounded z-depth-1" zoomable="true" %}
  </div>
</div>
