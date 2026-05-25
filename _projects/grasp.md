---
layout: page
title: GRASP
description: <strong>Open-world tabletop manipulation</strong> system using <strong>neuro-symbolic reasoning</strong> to execute <strong>natural language sorting instructions</strong> for warehouse environments.
importance: 1
category: projects
tags: [Robotics, AI, Control, Computer Vision]
# img: assets/img/projects/grasp7.png
images:
  slider: true
---

<div style="margin-bottom: 1.5rem;">
  <a href="https://allisonandreyev.github.io/grasp.github.io/" class="project-link-btn link-website" role="button">Website</a>
  <a href="https://github.com/allisonandreyev/grasp" class="project-link-btn link-github" role="button">GitHub</a>
</div>

<div style="display: flex; align-items: center; gap: 0.5rem; max-width: 40%; margin: 1rem auto;">
  <button onclick="document.getElementById('graspSlider').swiper.slidePrev()" style="background: none; border: 1px solid #ccc; border-radius: 50%; width: 2.2rem; height: 2.2rem; font-size: 1.3rem; cursor: pointer; color: #555; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">&#8249;</button>
  <swiper-container id="graspSlider" keyboard="true" pagination="true" pagination-clickable="true" loop="true" centered-slides="true" style="flex: 1; min-width: 0;">
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/grasp1.jpeg" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/grasp2.jpeg" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/grasp3.jpeg" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/grasp4.jpeg" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
    <swiper-slide>
      {% include figure.liquid path="assets/img/projects/grasp5.jpeg" class="img-fluid rounded z-depth-1" %}
    </swiper-slide>
  </swiper-container>
  <button onclick="document.getElementById('graspSlider').swiper.slideNext()" style="background: none; border: 1px solid #ccc; border-radius: 50%; width: 2.2rem; height: 2.2rem; font-size: 1.3rem; cursor: pointer; color: #555; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">&#8250;</button>
</div>

GRASP is an internship project at USG/UMD under Dr. Romel Gomez, built on top of JarvisSort, a gantry-based automated sorting system originally developed by a CPSE Summer team. I redesigned it into a fully open-world tabletop manipulation system that lets a robot understand and execute natural language instructions such as "move bottles to the bottom and all green things to the top," with potential applications in assistive technology, warehouse automation, and lab environments.

The core pipeline runs perception -> reasoning -> action. GroundingDINO handles open-vocabulary object detection, feeding detections into an LLM that generates a goal state from the natural language instruction. The system then compares the current shelf state against the goal state to determine which objects need to move and in what order, triggering and confirming sorting tasks autonomously. A client-server architecture with Raspberry Pi handles vision execution, camera streaming, annotated outputs, and automated label and environment processes.

End-to-end pick-and-place control maps detections directly to real motor behavior--yaw, pitch, roll, claw open/close, object grasp and release--integrating both an Arducam and a Logitech camera feed. The hardware runs on a CoreXY gantry with a PCA9685 I2C multi-servo controller and a differential-drive claw mechanism. I rebuilt and optimized the hardware integration loops repeatedly throughout the project, including gantry axle and idler fixes, rewiring the multi-servo controller, setting new angle and limit states, and validating the claw and differential drive for reliable autonomous placement.

<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUB40qp09lisQ53dZJ1D0a0M0gSPSR_WH4Zjex0sAmUX1CMr_UMN7SRFRaUECiT2njxsRixQ9D3DE8/pubembed?start=false&loop=false&delayms=15000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"></iframe>
</div>
