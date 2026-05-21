---
layout: page
title: Harmonic
description: Robot built for 'Decode' 25-26 competition for FIRST Tech Challenge. <strong> 3/500+ Chesapeake teams</strong> selected to compete in <strong>Governor's Cup Invitational.</strong>
importance: 5
category: projects
tags: [Robotics, Control]
images:
  slider: true
# img: assets/img/projects/eq11.png
---

<div style="display: flex; align-items: center; gap: 0.5rem; max-width: 60%; margin: 1rem auto;">
  <button onclick="document.getElementById('harmonicSlider').swiper.slidePrev()" style="background: none; border: 1px solid #ccc; border-radius: 50%; width: 2.2rem; height: 2.2rem; font-size: 1.3rem; cursor: pointer; color: #555; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">&#8249;</button>
  <swiper-container id="harmonicSlider" keyboard="true" pagination="true" pagination-clickable="true" loop="true" centered-slides="true" style="flex: 1; min-width: 0;">
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/eq4.png" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/eq6.png" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/eq7.png" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/eq8.png" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/eq9.png" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/eq10.png" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
  </swiper-container>
  <button onclick="document.getElementById('harmonicSlider').swiper.slideNext()" style="background: none; border: 1px solid #ccc; border-radius: 50%; width: 2.2rem; height: 2.2rem; font-size: 1.3rem; cursor: pointer; color: #555; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">&#8250;</button>
</div>

Harmonic is FTC 19458 Equilibrium.exe's robot for the 2025–26 *Decode* season. As the software lead, I built the full control stack from the ground up.

Localization is handled by an **OctoQuad coprocessor** paired with two GoBILDA 4-Bar Dead Wheel Odometry Pods, for a high-refresh absolute localizer with CRC16 error checking on encoder and localizer reads. Autonomous pathing uses a **PID-to-Point framework** with three independent PIDs (x, y, heading) for simultaneous translational and rotational control, a low-pass filter on the derivative to reduce noise, and square-root scaling on the proportional term for precision at small positional errors.

A key feature is **Auto on the Fly**: autonomous paths are stored as JSON files defining sequences of four action types--move to position, toggle intake, shoot, or wait--and a custom web editor lets us create and modify paths between rounds without recompiling, making auto adaptable to any partner alliance on the spot.

For shooting, I derived **auto-aim equations** from first principles using projectile motion, relating RPM and hood angle to elevation and distance from the target. We validated the model experimentally across multiple field positions and built a lookup table mapping goal distance to the optimal RPM and hood angle combination. Ball queuing in the **Spindexer** is managed with two color sensors and an array structure tracking each slot, with an 'active slot' variable that automates ball selection to maximize points per shot.

The entire codebase is built on a **Commands framework** that separates hardware (subsystems) from logic (commands), uses lifecycle phases (initialize, execute, end) and subsystem conflict interfaces to prevent collisions, and chains simple actions into complex autonomous and teleop routines, all tunable live via **FTC Dashboard**.

<div style="display: flex; align-items: center; gap: 0.5rem; max-width: 60%; margin: 1rem auto;">
  <button onclick="document.getElementById('harmonicVideoSlider').swiper.slidePrev()" style="background: none; border: 1px solid #ccc; border-radius: 50%; width: 2.2rem; height: 2.2rem; font-size: 1.3rem; cursor: pointer; color: #555; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">&#8249;</button>
  <swiper-container id="harmonicVideoSlider" keyboard="true" pagination="true" pagination-clickable="true" loop="true" centered-slides="true" style="flex: 1; min-width: 0;">
    <swiper-slide>
      <video class="img-fluid rounded z-depth-1" controls style="width: 100%;">
        <source src="{{ "/assets/img/projects/eq1.mp4" | relative_url }}" type="video/mp4">
      </video>
    </swiper-slide>
    <swiper-slide>
      <video class="img-fluid rounded z-depth-1" controls style="width: 100%;">
        <source src="{{ "/assets/img/projects/eq2.mp4" | relative_url }}" type="video/mp4">
      </video>
    </swiper-slide>
    <swiper-slide>
      <video class="img-fluid rounded z-depth-1" controls style="width: 100%;">
        <source src="{{ "/assets/img/projects/eq3.mp4" | relative_url }}" type="video/mp4">
      </video>
    </swiper-slide>
  </swiper-container>
  <button onclick="document.getElementById('harmonicVideoSlider').swiper.slideNext()" style="background: none; border: 1px solid #ccc; border-radius: 50%; width: 2.2rem; height: 2.2rem; font-size: 1.3rem; cursor: pointer; color: #555; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">&#8250;</button>
</div>
