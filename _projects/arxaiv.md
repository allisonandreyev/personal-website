---
layout: page
title: arxAIv
description: A speculative AI art installation of <strong>100+ fully AI-generated computer vision research papers</strong> examining authorship and legitimacy in academia.
importance: 2
category: research
tags: [AI, Computer Vision, Web Dev]
redirect: https://allisonandreyev.github.io/arxaiv.github.io/
# img: assets/img/projects/arxaiv2.png
---

<div style="margin-bottom: 1.5rem;">
  <a href="https://allisonandreyev.github.io/arxaiv.github.io/" class="project-link-btn link-website" role="button">Website</a>
  <a href="https://github.com/allisonandreyev/arxAIv" class="project-link-btn link-github" role="button">GitHub</a>
  <a href="https://doi.org/10.57967/hf/7830" class="project-link-btn link-huggingface" role="button">HuggingFace</a>
  <a href="https://huggingface.co/blog/allisonandreyev/arxaiv" class="project-link-btn link-blog" role="button">Blog Post</a>
</div>

<div style="position: relative; width: 100%; height: 0; padding-top: 33.75%; margin-bottom: 1.2em; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);">
  <iframe src="https://www.youtube.com/embed/EyoskUy2ZXo" frameborder="0" allowfullscreen style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none;"></iframe>
</div>

arxAIv is a speculative art installation that consists of 100 fully AI-generated computer vision research papers and 156 AI-generated figures, assembled to examine questions of authorship, legitimacy, and automation in academic publishing.

I gathered analytics on the generated corpus — tracking hallucinated affiliations and institutions, common author names and nationalities, recurring features, title similarities, and topic clusters. To map the semantic structure of the collection, I built an embedding-based clustering and visualization pipeline using CLIP embeddings and a 3D force-graph library, producing three distinct force graphs: one using text embeddings, one using figure embeddings, and one comparing AI-generated figures directly against real CVPR paper figures. The result reveals how AI-generated academic content clusters, diverges, and superficially mimics real research.

<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS7URQenEkk-AVpozegZlaA2czYEG1APXIVUbc8PDZjY87RCKteJtiLauabs2oIb6wxyl9C0xR157g9/pubembed?start=false&loop=false&delayms=15000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"></iframe>
</div>

The full dataset (100 AI-generated papers, 156 figures, and a metadata CSV containing titles, authors, affiliations, detected features, raw text, and GPT-parsed cleaned text) is published on GitHub. The project is presented on an academic-style website with curated paper samples and the interactive embedding graphs.
