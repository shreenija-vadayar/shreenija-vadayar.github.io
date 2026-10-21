# Shreenija Vadayar: Portfolio

An Astro site, hosted free on GitHub Pages. One portfolio, two paths (Engineering & Product Development, Design & Creative Practice), and one shared case-study page per project.

## Where things live

| To change… | Edit this |
|---|---|
| Name, email, LinkedIn, location, footer year, resume links | `src/data/site.ts` |
| A project's text, tags, order, media | `src/content/projects/<project>.md` |
| Images and videos | put files in `public/media/`, then list the file names in the project's `media:` section |
| Resume PDFs | replace the files in `public/resumes/` (keep the same file names); they are already switched on in `src/data/site.ts` |
| Skills and credentials | `src/data/site.ts` |
| About, Contact wording | `src/pages/about.astro`, `src/pages/contact.astro` |
| Colors, fonts, spacing | `src/styles/global.css` (top of the file) |

## Editing a project

Open the project's `.md` file. Everything is in the block between the `---` lines:

- `summary`, `status`, `tags`: used on project cards.
- `order: { engineering: 2, design: 1 }`: position in each path. Remove a path to keep the project out of it.
- `overview`, `problem`, `role`, `technical`, `outcome`: the five sections. Delete one and it disappears from the page.
- `featured: true` shows it in "Selected work" on the home page. `bridge: true` shows it in "Where the two paths meet".
- `hidden: true` keeps it off the public site until it's ready.

To add a new project, copy an existing file, rename it (the file name becomes the URL), and edit.

## Adding images and video

1. Copy the file into `public/media/` using a clear name, like `woven-voices-hero.jpg` or `tailgating-device-demo.mp4`.
2. In the project file, add it under `media:`:

```yaml
media:
  hero:
    src: "woven-voices-hero.jpg"
    alt: "Seven mechanical lotus flowers mounted on a garment, shown on a mannequin."
  demo:
    src: "woven-voices-demo.mp4"
    poster: "woven-voices-demo-poster.jpg"
    alt: "Flowers opening as a visitor walks toward the garment."
  process:
    - src: "woven-voices-sketch.jpg"
      alt: "Pencil sketch of the flower mechanism."
      caption: "Early mechanism sketch"
```

### Galleries and click-to-enlarge

- Add as many images as you like to `process`, `technical`, and `extra`. Each is a list, so copy a `- src:` block for every new picture.
- `process` and `extra` photos flow into columns at their natural proportions. `technical` (diagrams, CAD, code) uses larger cells so detail stays readable.
- Add `wide: true` to any image to make it span the full width (good for a wide diagram or panorama).
- Every image can be clicked to enlarge. In the viewer, the left and right arrow keys (or the on-screen arrows) move through all the images on the page, Esc or clicking outside closes it, and the caption shows underneath.

```yaml
  technical:
    - src: "woven-voices-wiring.png"
      alt: "Wiring diagram showing seven servos connected to the controller boards."
      caption: "Wiring overview"
      wide: true
```

### Adding videos (building phases, tests, demos)

Videos go in the same galleries as photos, so a clip can sit right next to the step it shows. Use `video:` instead of `src:`:

```yaml
  process:
    - video: "woven-voices-servo-test.mp4"
      poster: "woven-voices-servo-test-poster.jpg"
      alt: "A servo moving a flower stem up and down during testing."
      caption: "Testing the first stem design"
      captions: "woven-voices-servo-test.vtt"   # optional captions file
```

- `video` is the file in `public/media/`. `poster` is the still picture shown before it plays (a screenshot of any frame works). `alt` describes what the video shows. `caption` and `captions` are optional.
- Videos never autoplay and always have playback controls.
- The one featured clip at the top of a project is `demo:` (same fields, no caption text).
- **Format and size:** use MP4 (H.264). Phone videos in .mov may not play in every browser, so convert them. Keep each clip short, ideally under 20 MB. GitHub blocks files over 100 MB, and the whole repo should stay under about 1 GB, so many long clips will fill it quickly.
- **To shrink a video** (free tool: ffmpeg, ffmpeg.org, or the app HandBrake):
  ```
  ffmpeg -i input.mov -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k -movflags +faststart output.mp4
  ```
  Remove the audio for silent clips by replacing `-c:a aac -b:a 96k` with `-an`.
- **To make a poster image** from the first second:
  ```
  ffmpeg -i output.mp4 -ss 00:00:01 -frames:v 1 poster.jpg
  ```
- Longer videos are better on YouTube or Vimeo, with a link from the project text, than stored in the repo.

Always write real `alt` text (what the picture shows). Keep video short and compressed (under about 20 MB), with no autoplay. GitHub blocks files over 100 MB, and the whole site should stay under 1 GB. Compress photos to about 2000 px wide before adding them.

## Preview on your computer

Needs [Node.js](https://nodejs.org) 20 or newer.

```
npm install
npm run dev
```

Open the address it prints (usually http://localhost:4321).

## Publish with GitHub Pages

1. Create a public repo named `YOUR-USERNAME.github.io` and upload these files (or push with git).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Edit `astro.config.mjs` and replace `YOUR-USERNAME` in `site`. (If the repo has any other name, also set `base: '/repo-name'`.)
4. Every push to `main` rebuilds and publishes the site automatically (see the Actions tab). You can also edit files directly on github.com and commit.

## Draft mode vs. public mode

`showPlaceholders` in `src/data/site.ts`:

- `true` (current): dashed placeholder boxes show what media goes where, hidden projects appear, a "Private draft" banner shows, and search engines are told not to index the site.
- `false`: empty slots, hidden projects, and the banner all disappear. **Set this to `false` before sharing the link.**

## Before public launch

- [ ] Confirm Tecomet title ("Engineering Intern / Co-Op") matches employment records and LinkedIn
- [ ] Confirm the official name of the Make it Wearable contest award
- [ ] Confirm the dates for the ATLAS role (left off the page until confirmed) and add them if wanted
- [ ] Confirm degree title wording (site uses "Creative Technology & Design")
- [ ] Python: confirm how it was used; it appears in the skills list but not on the VR project page
- [ ] Confirm the Guardian Angel prototype status before adding anything beyond "concept explored"
- [ ] Confirm the email address in `src/data/site.ts`, and add a location if wanted
- [ ] The two master resumes are included in `public/resumes/`. They contain a phone number (and the creative one a photo); swap in versions without the phone number if she doesn't want it public
- [ ] Update the portfolio link on both resumes to the new site address
- [ ] Add media and check every photo and video is yours or cleared for use
- [ ] Check nothing Tecomet- or ATLAS-proprietary or confidential appears anywhere
- [ ] Colorado Symphony Redesign: add the goal and design decisions, then set `hidden: false`
- [ ] Set `showPlaceholders` to `false`
- [ ] Click through every page on a phone and a laptop, and test with the keyboard (Tab)
