# Chat Export — 2026-05-23

## Projects page: color-coded link buttons

**User:** For my projects page, make the links at the top have a border & be some other color than the main page. Color code by kind of link.

**Claude:** Added `.project-link-btn` CSS class with color variants to `_sass/_components.scss` and updated all project markdown files:

| Button       | Color                   | Used in            |
| ------------ | ----------------------- | ------------------ |
| GitHub       | Dark charcoal `#24292e` | SignScribe, arxAIv |
| Website      | Blue `#0076df`          | arxAIv, ByteBug    |
| HuggingFace  | Amber `#ff9d00`         | arxAIv             |
| Blog Post    | Green `#00ab37`         | arxAIv             |
| News Article | Red `#e74c3c`           | SignScribe         |
| Printables   | Orange `#fa6831`        | See3D              |
| See3D (org)  | Teal `#2698ba`          | See3D              |

---

## Project images

**User:** I have pics for each project, where do I put them?

**Claude:** Put them in `assets/img/projects/`. Use `{% include figure.liquid path="assets/img/projects/filename.jpg" class="img-fluid rounded z-depth-1" %}` for styled images.

---

## Adding images and video to projects

**User:** Add the images pls! I also added mp4 so pls try to embed that. Also, if I want to embed a slideshow, how should I go about that?

Files found in `assets/img/projects/`:

- signscribe1.jpg, signscribe2.jpg, SignScribe Slide Show.pdf
- arxaiv1.pdf
- bytebug1.jpg, bytebug2.mp4
- grasp1.jpeg, grasp2.jpeg, grasp3.png
- Ideator1.png, Ideator2.png, ideator3.pdf

**Claude:** Added images/video to all project files. For slideshows: recommended Google Slides embed (File → Share → Publish to web → Embed tab). Created `_projects/ideator.md` for MIT Ideator with placeholder link.

---

## Canva/Google Slides embeds

**User:** [Provided Canva embed for SignScribe, Google Slides embeds for Ideator, GRASP, arxAIv]

**Claude:** Replaced PDF iframes with responsive 16:9 embed containers for each presentation. Used `padding-top: 56.25%` responsive wrapper pattern.

---

## GRASP image layout adjustments

**User:** I want image 1 (grasp3) to be full width.

**Claude:** Removed `col-sm-4` wrapper from grasp3.png so it renders full width.

**User:** Center images.

**Claude:** Added `article figure { text-align: center; }` to `_components.scss`.

**User:** 2 images should be in one row.

**Claude:** Wrapped grasp1 and grasp2 in `<div class="row justify-content-center">` with `col-sm-5` each.

---

## GRASP links

**User:** Don't see any links for GRASP, add some.

**User:** Everything [same as the publication].

**Claude:** Pulled URLs from `_bibliography/papers.bib` and added Website + GitHub chips to grasp.md.

---

## arxAIv YouTube video height

**User:** Make the YT preview for arxAIv taller.

**Claude:** Switched from `video.liquid` include to responsive iframe container (`padding-top: 65%`).

**User:** Still same height as before. / Fix padding under arxAIv video. / No, it's the bottom that's too much.

**Claude:** Iteratively fixed: switched to direct iframe, adjusted `padding-top` from 65% → 39%, set iframe to `height: 100%` to eliminate dead space.

---

## SignScribe YouTube chip

**User:** Add this video to SignScribe as a chip: https://www.youtube.com/watch?v=bsrA27WT6OM

**Claude:** Added "Demo Video" chip with new `link-video` class (violet `#7c3aed`).

---

## Video chip color + arxAIv final height

**User:** Make 'video' have a different color. arxAIv should be 60% height not 100.

**Claude:**

- Changed `link-video` to violet (`#7c3aed` light, `#a78bfa` dark mode)
- Set arxAIv YouTube container to `padding-top: 33.75%` (= 56.25% × 60%)

---

## Files changed in this session

- `_sass/_components.scss` — project link button styles, figure centering
- `_projects/signscribe.md`
- `_projects/arxaiv.md`
- `_projects/bytebug.md`
- `_projects/grasp.md`
- `_projects/see3d.md`
- `_projects/ideator.md` (created)
