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

*Completed August 2026 and presented at the NASA Goddard Engineering and Technology Directorate branch presentation and the National Space Club poster session.*

This is a NASA Goddard Space Flight Center internship project (Engineering and Technology Directorate, Code 525 Space Club), now formalized as **CORTEx** (Cross-sensor Onboard Reflex & Terrain Exploration), building an RL-driven autonomous navigation system for the TurtleBot 4 that can handle diverse, unstructured terrain. The team split into three subteams: RL agent implementation, simulation development, and environment/sensing; I led simulation development.

I built a MATLAB-based training simulator with a live GUI: a customizable obstacle library (polygonal, square, and circular obstacles), randomized room shapes and boundary generation, and both static and dynamic (moving) obstacles. Simulated lidar renders as a full-circle ray fan around the rover, matching the real TurtleBot 4's scan geometry so trained agents transfer to hardware. Early iterations exposed a toggle between CMAC and DDPG agents with live reward/loss/exploration graphs and save/load for tracks and Q-matrices; the pipeline has since moved past that flat toggle (see below).

Over the course of development I tightened the safety and physics fidelity of the sim: restricting lidar range to a realistic 12m, preventing obstacles from spawning inside the goal pose, adding a soft safety-region penalty around obstacles distinct from the collision penalty, and smoothing acceleration/deceleration so velocity commands ramp instead of jumping instantaneously. I also added path-trail visualization (a solid line for the current episode, dotted for the previous one) to make training behavior easier to inspect at a glance.

I then rebuilt the core agent around a CMAC (Cerebellar Model Articulation Controller) actor, a lookup-table-style function approximator suited to hard real-time control, layered with a Follow-the-Gap Method (FGM) reactive planner and TD3-style training. The FGM layer extracts open bearing "gaps" from the lidar scan (correctly merging any gap that wraps across the scan's seam), scores each gap by goal alignment to pick the best one, and a directional-clearance safety layer gates speed based on the robot's actual heading rather than the single nearest obstacle reading, which is what stops the robot from deadlocking while rotating in place.

The finished control stack layers six modules, each independently toggleable so its contribution to the trajectory can be ablated in the GUI: Follow-the-Gap for reactive gap selection, TD3/CMAC for the learned policy, DWA kinodynamic limits, ORCA for dynamic-obstacle reciprocal avoidance, a QP solver that arbitrates between the policy's preferred action and the safety constraints, and a CBF-CLF safety layer that provides the hard collision guarantee. A Kalman filter fuses lidar, IR, IMU, and wheel encoders into the state estimate. The whole thing is custom — no Nav2 — and runs in real time within the Raspberry Pi 4B's compute budget, deployed straight from the MATLAB sim to hardware.

To scale up data collection I split the simulator into two paths that share identical environment/policy/reward code: the original live GUI for interactive training and debugging, and a new graphics-free/headless collector that rolls out episodes without rendering for dramatically faster large-scale data generation. I also added a trajectory logging system that records every step of an episode, pose, goal distance, gap alignment, emergency-stop/escape events, and terminal outcome (arrived/crashed/timeout), for training diagnostics and for the hardware team to debug deployment. A smoke-test suite exercises the full pipeline end to end (FGM gap extraction, reward math, actor export/reload, and evaluation) with no GUI or MATLAB toolboxes required.

The simulator work paid off directly in the final numbers. Parallel workers plus the headless collector cut training from 350s to 35s per 100 episodes, a 10x speedup. On the trained policy, episodes where the learned actor stayed in control (safety layers overriding it less than half the time) reached the goal 90.2% of the time, versus 30.1% for episodes that fell back to being FGM-led, which is the clearest evidence that the RL layer is doing real work rather than riding on the reactive planner. The deployment pipeline pushes a new algorithm onto the TurtleBot 4 in under two minutes, with documentation and configuration hooks for whoever picks the project up next.

<div class="row mt-3 mb-3 justify-content-center">
  <div class="col-sm-9">
    {% include figure.liquid path="assets/img/projects/recents/nasarl-arrival-rate.png" class="img-fluid rounded z-depth-1" zoomable="true" %}
  </div>
</div>

In parallel, the rest of the team pushed hardware integration: a TurtleBot 4 script for reading/formatting live sensor data and driving the rover a set distance with built-in emergency-stop safety, and an "immune system" + HDC-based terrain classifier that passed 180/180 automated tests, compressed 54,000+ sensor readings down to 88 KB (~22x smaller than raw), and detects and auto-corrects wheel-velocity sensor faults in real time. Classification accuracy climbs with motion (worst case is a stopped robot on textured/carpet terrain, at 61.5%, vs. 94–99% while driving), and the HDC memory-similarity matrix shows the same terrain reads as highly self-consistent across stopped/straight/turning states while still separating cleanly from other terrains. Against a comparable deep-learning terrain classifier at roughly 150 MB, the 88 KB memory-of-healthy model is about three orders of magnitude smaller, and it gets there with no camera and no ground-truth terrain labels while landing within about 2% of ideal navigation performance. At runtime, crossing from a smooth surface onto a high-slip one triggers a reclassification that drops the speed multiplier exactly where slip risk is higher, then restores full speed back on easy ground.

<div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin: 1.5rem 0;">
  <img src="{{ "assets/img/projects/recents/nasarl-terrain-accuracy.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
  <img src="{{ "assets/img/projects/recents/nasarl-hdc-similarity.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
</div>

The final poster, presented at the National Space Club summer session:

<div class="row mt-3 mb-3 justify-content-center">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/projects/recents/nasarl-cortex-poster.png" class="img-fluid rounded z-depth-1" zoomable="true" %}
  </div>
</div>