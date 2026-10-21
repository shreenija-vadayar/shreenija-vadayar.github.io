import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per project in src/content/projects/. File name = page URL (woven-voices.md -> /projects/woven-voices/).
const image = z
  .object({
    src: z.string().optional(),       // an image file in public/media/
    video: z.string().optional(),     // OR a video file in public/media/ (use instead of src)
    poster: z.string().optional(),    // thumbnail image shown before a video plays
    captions: z.string().optional(),  // optional .vtt captions file for a video
    alt: z.string(),                  // what the picture or video shows
    caption: z.string().optional(),
    wide: z.boolean().optional(),
  })
  .refine((v) => v.src || v.video, 'Each media item needs src (image) or video (video file).');

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),            // one sentence for cards
    status: z.string(),             // e.g. Individual Project, Team Project, Concept
    context: z.string(),            // where/what it was
    dates: z.string().optional(),   // leave out unless known
    tags: z.array(z.string()).max(4),
    featured: z.boolean().default(false),   // shows in "Selected work" on the home page
    bridge: z.boolean().default(false),     // shows in the Creative Technology strip
    hidden: z.boolean().default(false),     // true = not shown on the public site yet
    order: z.object({ engineering: z.number().optional(), design: z.number().optional() }),
    // The five case-study sections. Leave a section out and it simply doesn't appear.
    overview: z.string().optional(),
    problem: z.string().optional(),
    role: z.array(z.string()).optional(),
    technical: z.array(z.string()).optional(),
    outcome: z.array(z.string()).optional(),
    // Media: add file names (files live in public/media/). Empty = nothing shown on the public site.
    media: z.object({
      hero: image.optional(),
      demo: z.object({ src: z.string(), poster: z.string().optional(), captions: z.string().optional(), alt: z.string() }).optional(),
      process: z.array(image).optional(),
      technical: z.array(image).optional(),
      extra: z.array(image).optional(),
    }).optional(),
    // Text shown only in private-draft mode, describing what belongs in each empty media slot.
    slots: z.object({
      hero: z.string().optional(),
      demo: z.string().optional(),
      process: z.string().optional(),
      technical: z.string().optional(),
      extra: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { projects };
