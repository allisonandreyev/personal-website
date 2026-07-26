---
layout: page
title: NASA RL Sim
description: <strong>Reinforcement learning simulator</strong> for NASA Goddard's CORTEx TurtleBot 4 terrain-adaptive navigation project, training and visualizing a CMAC/TD3 rover-navigation agent in real time.
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

This is a NASA Goddard Space Flight Center internship project (Engineering and Technology Directorate, Code 525 Space Club), now formalized as **CORTEx** (Cross-sensor Onboard Reflex & Terrain Exploration), building an RL-driven autonomous navigation system for the TurtleBot 4 that can handle diverse, unstructured terrain. The team split into three subteams: RL agent implementation, simulation development, and environment/sensing; I led simulation development.

I built a MATLAB-based training simulator with a live GUI: a customizable obstacle library (polygonal, square, and circular obstacles), randomized room shapes and boundary generation, and both static and dynamic (moving) obstacles. Simulated lidar renders as a full-circle ray fan around the rover, matching the real TurtleBot 4's scan geometry so trained agents transfer to hardware. Early iterations exposed a toggle between CMAC and DDPG agents with live reward/loss/exploration graphs and save/load for tracks and Q-matrices; the pipeline has since moved past that flat toggle (see below).

Over the course of development I tightened the safety and physics fidelity of the sim: restricting lidar range to a realistic 12m, preventing obstacles from spawning inside the goal pose, adding a soft safety-region penalty around obstacles distinct from the collision penalty, and smoothing acceleration/deceleration so velocity commands ramp instead of jumping instantaneously. I also added path-trail visualization (a solid line for the current episode, dotted for the previous one) to make training behavior easier to inspect at a glance.

I then rebuilt the core agent around a CMAC (Cerebellar Model Articulation Controller) actor, a lookup-table-style function approximator suited to hard real-time control, layered with a Follow-the-Gap Method (FGM) reactive planner and TD3-style training. The FGM layer extracts open bearing "gaps" from the lidar scan (correctly merging any gap that wraps across the scan's seam), scores each gap by goal alignment to pick the best one, and a directional-clearance safety layer gates speed based on the robot's actual heading rather than the single nearest obstacle reading, which is what stops the robot from deadlocking while rotating in place.

To scale up data collection I split the simulator into two paths that share identical environment/policy/reward code: the original live GUI for interactive training and debugging, and a new graphics-free/headless collector that rolls out episodes without rendering for dramatically faster large-scale data generation. I also added a trajectory logging system that records every step of an episode, pose, goal distance, gap alignment, emergency-stop/escape events, and terminal outcome (arrived/crashed/timeout), for training diagnostics and for the hardware team to debug deployment. A smoke-test suite exercises the full pipeline end to end (FGM gap extraction, reward math, actor export/reload, and evaluation) with no GUI or MATLAB toolboxes required.

In parallel, the rest of the team pushed hardware integration: a TurtleBot 4 script for reading/formatting live sensor data and driving the rover a set distance with built-in emergency-stop safety, and an "immune system" + HDC-based terrain classifier that passed 180/180 automated tests, compressed 54,000+ sensor readings down to 88 KB (~22x smaller than raw), and detects and auto-corrects wheel-velocity sensor faults in real time. Classification accuracy climbs with motion (worst case is a stopped robot on textured/carpet terrain, at 61.5%, vs. 94–99% while driving), and the HDC memory-similarity matrix shows the same terrain reads as highly self-consistent across stopped/straight/turning states while still separating cleanly from other terrains.

<div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin: 1.5rem 0;">
  <img src="{{ "assets/img/projects/recents/nasarl-terrain-accuracy.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
  <img src="{{ "assets/img/projects/recents/nasarl-hdc-similarity.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
</div>