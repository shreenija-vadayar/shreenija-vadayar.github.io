// ─── Edit site-wide details here. Everything else on the site reads from this file. ───

export const site = {
  name: 'Shreenija Vadayar',
  description:
    'Portfolio of Shreenija Vadayar: design engineering, creative technology, and product development.',
  email: 'shreenijacreates@gmail.com', // confirm before launch
  linkedin: 'https://www.linkedin.com/in/shreenija-vadayar',
  location: '', // e.g. 'Denver, CO' (leave empty to hide)
  year: 2026,

  // true  = private draft: empty media slots are shown as labeled boxes, hidden projects appear, search engines are told not to index.
  // false = public site: empty slots and hidden projects disappear.
  showPlaceholders: true,

  // Resume PDFs: put the files in public/resumes/, then set ready: true.
  resumes: {
    technical: {
      label: 'Technical resume',
      action: 'Download technical resume',
      file: 'resumes/Shreenija-Vadayar-Technical-Resume.pdf',
      ready: true,
      blurb: 'For product development, design engineering, and manufacturing roles.',
    },
    creative: {
      label: 'Creative resume',
      action: 'Download creative resume',
      file: 'resumes/Shreenija-Vadayar-Creative-Resume.pdf',
      ready: true,
      blurb: 'For creative technology, experiential design, and creative production roles.',
    },
  },
};

export const paths = {
  engineering: {
    title: 'Engineering & Product Development',
    short: 'Engineering',
    tagline: 'Product Development | Design Engineer | Prototyping & Creative Technology',
    blurb:
      'Explore projects involving product development, CAD, fabrication, electronics, testing, technical documentation, and iterative problem-solving.',
    resume: 'technical' as const,
  },
  design: {
    title: 'Design & Creative Practice',
    short: 'Design & Creative',
    tagline: 'Creative Technologist | Experiential Design | Visual Storytelling',
    blurb:
      'Explore wearable design, interactive experiences, visual storytelling, apparel, branding, and creative concepts.',
    resume: 'creative' as const,
  },
};

export const nav = [
  { label: 'Home', href: '' },
  { label: paths.engineering.short, href: 'engineering/' },
  { label: paths.design.short, href: 'design/' },
  { label: 'About', href: 'about/' },
  { label: 'Skills & Credentials', href: 'skills/' },
  { label: 'Resume', href: 'resume/' },
  { label: 'Contact', href: 'contact/' },
];

export const skills = [
  { group: 'CAD & technical documentation', items: ['SolidWorks', 'SketchUp', 'CAD revisions', 'Engineering drawings', 'Bills of Materials (BOMs)', 'Process Control Plans (PCPs)', 'Technical documentation'] },
  { group: 'Prototyping & fabrication', items: ['3D printing', 'Laser cutting', 'Fabrication-file preparation', 'Physical prototyping', 'Assembly', 'Soldering', 'Wiring', 'Materials evaluation'] },
  { group: 'Electronics & physical computing', items: ['Arduino IDE', 'Arduino Uno', 'Adafruit Trinket M0', 'VL53L0X distance sensors', 'HC-SR04 ultrasonic sensor', 'Micro servos', 'NeoPixel LEDs', 'Piezo buzzer', 'Bluetooth connectivity'] },
  { group: 'Programming & interactive technology', items: ['Python', 'Arduino programming', 'Unity', 'Virtual reality development'] },
  { group: 'Manufacturing & quality', items: ['Visual and dimensional inspection', 'Tolerance verification', 'Nonconformance documentation', 'Defect investigation', 'Root-cause analysis', 'Continuous improvement'] },
  { group: 'Creative production', items: ['Garment construction and pattern drafting', 'Lighting and sound production', 'Art direction', 'Moodboards and visual storytelling'] },
  { group: 'Design & productivity tools', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Microsoft Excel', 'PowerPoint', 'Google Workspace'] },
];

export const credentials = [
  { title: 'B.S. Creative Technology & Design', detail: 'University of Colorado Boulder, May 2025. Minors: Business & Entrepreneurship; Leadership Studies.' },
  { title: 'Lean Six Sigma Green Belt', detail: 'Council for Six Sigma Certification (CSSC), July 2026.' },
  { title: 'Women’s Startup Program: Management & Entrepreneurship Certificate', detail: 'IIM Bangalore (NSRCEL) & Goldman Sachs.' },
  { title: 'First Prize, Autodesk Make it Wearable Engineering Student Contest', detail: 'For Woven Voices, my senior capstone.' },
];

// Builds a link that works under any GitHub Pages base path.
export const url = (p = '') => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');
