---
layout: page
title: MIT Ideator
description: A <strong>neuro-symbolic ideation machine</strong> that combines LLM seed generation, knowledge graph reasoning, and constraint-based planning to surface <strong>diverse, high-quality ideas.</strong>
importance: 3
category: projects
tags: [AI, Web Dev]
# img: assets/img/projects/ideator3.png
---
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/allisonandreyev/ideator" class="project-link-btn link-github" role="button">GitHub</a>
</div>

<div class="row mt-3 mb-3">
  <div class="col-sm-12">
    <video class="img-fluid rounded z-depth-1" controls style="width: 100%;">
      <source src="{{ '/assets/img/projects/ideator.mp4' | relative_url }}" type="video/mp4">
    </video>
  </div>
</div>

<div class="row mt-3 mb-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/Ideator1.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/Ideator2.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Current ideation tools tend to generate ideas in isolation, lacking the reasoning depth, diversity, and structured evaluation needed for complex decision-making. MIT Ideator is a neuro-symbolic ideation machine that addresses this by combining LLM-driven brainstorming with a symbolic knowledge graph and constraint-based planner.

The system takes a user brief (goals, constraints, resources, and success criteria) and runs it through a six-stage pipeline: LLM seed expansion generates 20–50 ideas as structured nodes; embedding-based KNN clustering groups similar ideas; a symbolic rule layer flags contradictions, missing prerequisites, and ethical concerns; and a holistic planner scores each idea across novelty, feasibility, cost, time, risk, and impact, then outputs the *n* strongest.

A key design element is the **pregnant question,** a question about an idea that spawns further questions, translating uncertainty into decisions that reshape the search. This keeps humans in the loop and allows the system to focus depth where it matters most.

The interactive Plotly knowledge graph lets users visualize clusters, hover over nodes to see full idea attributes and scores, and collaboratively add, remove, or edit ideas. The neurosymbolic approach--representing each idea as a node with typed edges (enables, conflicts, refines)--enables holistic evaluation that purely neural systems lack.

Current work focuses on optimizing compute time and running ablation studies to validate the contribution of each system component.

<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQVJH6mOSvELKADZLbJur0jumPfLYNdxRkq4bjijaKfnRxtuHAZ7GAaBbyGmX8XtNnlVPRvBvxzDhl9/pubembed?start=false&loop=false&delayms=15000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"></iframe>
</div>
