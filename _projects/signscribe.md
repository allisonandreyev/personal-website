---
layout: page
title: SignScribe
description: <strong>Award-winning</strong> bionic robotic hand that <strong>translates speech to ASL finger spelling in real time</strong> using an open-source ASR kit and rendered GUI through Blender.
importance: 2
category: research
tags: [Robotics, Control, Outreach]
# img: assets/img/projects/signscribe.png
---

<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/allisonandreyev/SignScribe" class="project-link-btn link-github" role="button">GitHub</a>
  <a href="https://themoco.show" class="project-link-btn link-news" role="button">News Article</a>
  <a href="https://www.youtube.com/watch?v=bsrA27WT6OM" class="project-link-btn link-video" role="button">Demo Video</a>
</div>

<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 2.5em; overflow: hidden; border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGN4DqBhtI/mRZTMxMr8pkS7D6j_VRYDw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

SignScribe is a bionic-like robotic hand that translates spoken English into American Sign Language finger spelling in real time. I built it as project leader during the [UMD Cyber-Physical Systems Engineering (CPSE) Summer Program](https://cpse.umd.edu/).

<div class="row mt-4 mb-3 justify-content-center">
  <div class="col-sm-8">
    {% include figure.liquid path="assets/img/projects/signscribe1.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row mb-4 justify-content-center">
  <div class="col-sm-8">
    {% include figure.liquid path="assets/img/projects/signscribe2.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

The hand uses VOSK, an open-source speech recognition toolkit, to convert audio into text in real time. A Python match-case statement parses each letter and dispatches the corresponding servo commands to 7 hand servos, allowing the hand to sign any word in the English language including names and common references. The wrist has 2 degrees of freedom. A Blender-rendered GUI displays the signing hand in 3D alongside a live speech transcript, and a configuration file exposes 7+ user-adjustable settings including sign speed, word and letter pause timing, auto-save transcript, and word censoring. The physical hand sits on a 3D-printed SolidWorks-designed base with a clear acrylic frame and rubber grip pads, with a custom perforated board controlling status LEDs that communicate boot stages.

<div class="row mt-4 mb-4 justify-content-center">
  <div class="col-sm-5" style="max-width: 35%;">
    <video class="img-fluid rounded z-depth-1 w-100" controls>
      <source src="{{ "/assets/img/projects/signscribe1.mp4" | relative_url }}" type="video/mp4">
    </video>
  </div>
  <div class="col-sm-5" style="max-width: 35%;">
    <video class="img-fluid rounded z-depth-1 w-100" controls>
      <source src="{{ "/assets/img/projects/signscribe2.mp4" | relative_url }}" type="video/mp4">
    </video>
  </div>
</div>

I was selected to solo present SignScribe at Demo Day to an audience of 200+ people, including Nobel Physics Prize winner Dr. Bill Phillips (MIT alum), Maryland lawmakers, UMD professors, and tech startup founders. SignScribe won the **Best Team Award**, recognizing market potential, presentation quality, teamwork, and innovation.

<div style="position: relative; width: 100%; height: 0; padding-top: 75.42%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 2em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px;">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRScHWAjytlMcGvMKAapEf4SIF_Jrm3B7gqrxm_OBAJLkWQCmDIlX79c78hXgymEGeNPle7PfDjdsj9/pubembed?start=false&loop=false&delayms=15000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"></iframe>
</div>
