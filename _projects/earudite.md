---
layout: page
title: Earudite
description: A <strong>crowdsourcing platform</strong> that collects speech training data from Quiz Bowl questions to improve automatic speech recognition systems.
importance: 2
category: research
tags: [AI, Speech Recognition, Web Dev]
# img: assets/img/projects/earudite1.png
---

<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/allisonandreyev/Earudite" class="project-link-btn link-github" role="button">GitHub</a>
</div>

<div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin: 1.5rem 0;">
  <img src="{{ "assets/img/projects/earudite1.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
  <img src="{{ "assets/img/projects/earudite2.png" | relative_url }}" class="img-fluid rounded z-depth-1" style="height: 280px; width: auto;" data-zoomable>
</div>

Earudite is a crowdsourcing platform designed to collect speech training data using Quiz Bowl questions, helping improve automatic speech recognition (ASR) systems on domain-specific, academic vocabulary. Players answer quiz questions aloud, and their recordings are captured, transcribed, and aligned to build a labeled speech dataset.

Off-the-shelf ASR systems tend to struggle with the dense proper nouns, jargon, and rapid-fire phrasing found in Quiz Bowl questions, an academic trivia format spanning literature, science, and history. Earudite turns competitive gameplay into a data collection pipeline: by making the game itself the incentive to record, it crowdsources labeled audio in a niche vocabulary domain that's otherwise expensive to collect. The project was developed as part of Professor Jordan Boyd-Graber's research group at the University of Maryland.

The system is built as a multi-service architecture: a React frontend for gameplay, a Python/Flask data flow server for managing questions, recordings, and transcripts, a Socket server for real-time game state, and an HLS streamer for audio delivery, all coordinated through a shared MongoDB instance. I worked on both the frontend and backend, including gameplay logic, transcript processing, and account/data-management features.

On the gameplay side, I added multi-window detection to stop users from running duplicate sessions and fixed a heavy lag bug traced to a stale `useEffect` dependency. I also reworked the account creation flow to add a terms-and-consent step. For transcript data, I fixed ordering bugs in how VTT (subtitle/caption) files were merged across recording segments, which was critical for keeping transcripts correctly time-aligned with audio.

I integrated OpenAI's Whisper for player answer transcription, which turned the game hands-free: live speech transcription with spoken keywords to start and stop the buzzer and submit an answer, so a player never has to touch the keyboard mid-question. Making that work also meant fixing the login schema it depended on.

On the question side, I implemented difficulty-based question selection with per-category filtering, and a 50-50 split between recording a brand-new question and re-recording an existing one, which keeps the dataset growing in breadth while still accumulating multiple takes per question for ASR training. I also added recording history to the user dashboard so players can revisit past quiz bowl plays, their own recordings, and points scored. Separately, I wrote 8 quiz-bowl-style questions for Multimodal QANTA, the group's annual contest studying LLM versus human adversarial question answering (ICML 2026 workshop).

Beyond features, I ran evaluation passes over the site — exercising features end to end, filing bugs, and fixing rendering errors.

To keep players engaged, I built a leaderboard system with live rankings pulled from the data flow server, plus a monthly archival process that clears and stores past leaderboards in their own collection so users can browse historical results. On the admin side, I added a protected `/audio/<audio_id>` endpoint and updated the data-export utility to decrypt recordings, giving the research team a way to pull and review collected audio data.
