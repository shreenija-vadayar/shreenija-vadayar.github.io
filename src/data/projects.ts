import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from './site';

export type Entry = CollectionEntry<'projects'>;

export async function visibleProjects(): Promise<Entry[]> {
  const all = await getCollection('projects');
  return all.filter((p) => site.showPlaceholders || !p.data.hidden);
}

export async function projectsFor(path: 'engineering' | 'design'): Promise<Entry[]> {
  const all = await visibleProjects();
  return all
    .filter((p) => p.data.order[path] !== undefined)
    .sort((a, b) => a.data.order[path]! - b.data.order[path]!);
}

export async function allProjects(): Promise<Entry[]> {
  const eng = await projectsFor('engineering');
  const des = (await projectsFor('design')).filter((p) => p.data.order.engineering === undefined);
  return [...eng, ...des];
}

// Which accent color a project page uses: engineering-only = teal, design-only = plum, shared = ink.
export function accentFor(d: Entry['data']): 'engineering' | 'design' | 'both' {
  const e = d.order.engineering !== undefined;
  const g = d.order.design !== undefined;
  return e && !g ? 'engineering' : g && !e ? 'design' : 'both';
}
