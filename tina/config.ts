import { defineConfig } from 'tinacms';

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.HEAD ||
  'main';

const textarea = (name: string, label: string) => ({
  type: 'string' as const,
  name,
  label,
  ui: { component: 'textarea' },
});

const detailFields = [
  { type: 'string' as const, name: 'title', label: 'Title' },
  textarea('description', 'Description'),
];

const roleFields = [
  { type: 'string' as const, name: 'id', label: 'ID' },
  { type: 'string' as const, name: 'title', label: 'Role' },
  { type: 'string' as const, name: 'company', label: 'Company / Employment' },
  { type: 'string' as const, name: 'dates', label: 'Dates' },
  { type: 'string' as const, name: 'location', label: 'Location' },
  { type: 'image' as const, name: 'logo', label: 'Organisation logo', accept: 'image' },
  { type: 'string' as const, name: 'description', label: 'What he did', list: true, ui: { component: 'textarea' } },
  { type: 'string' as const, name: 'skills', label: 'Skills used & acquired', list: true },
];

const skillFields = [
  { type: 'string' as const, name: 'name', label: 'Skill' },
  { type: 'string' as const, name: 'category', label: 'Category', options: ['industry', 'tools', 'interpersonal'] },
  { type: 'string' as const, name: 'source', label: 'Source' },
  { type: 'image' as const, name: 'logo', label: 'Source logo', accept: 'image' },
];

const educationFields = [
  { type: 'string' as const, name: 'institution', label: 'Institution' },
  { type: 'string' as const, name: 'program', label: 'Programme / Degree' },
  { type: 'string' as const, name: 'dates', label: 'Dates' },
  { type: 'image' as const, name: 'logo', label: 'Institution logo', accept: 'image' },
  { type: 'string' as const, name: 'skills', label: 'Related skills', list: true },
];

const certificationFields = [
  { type: 'string' as const, name: 'title', label: 'Certification' },
  { type: 'string' as const, name: 'issuer', label: 'Issuer' },
  { type: 'string' as const, name: 'issued', label: 'Issued' },
  { type: 'image' as const, name: 'logo', label: 'Issuer logo', accept: 'image' },
];

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'images',
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Home',
        path: 'content/home',
        format: 'json',
        ui: { router: () => '/' },
        fields: [
          textarea('seoDescription', 'SEO description'),
          { type: 'string', name: 'title', label: 'Page title' },
          { type: 'string', name: 'kicker', label: 'Kicker' },
          { type: 'string', name: 'headlineLine1', label: 'Headline line 1' },
          { type: 'string', name: 'headlineAccent', label: 'Headline accent' },
          textarea('copy', 'Hero copy'),
          { type: 'image', name: 'heroImage', label: 'Hero image', accept: 'image' },
          { type: 'string', name: 'workButton', label: 'Work button label' },
        ],
      },
      {
        name: 'about',
        label: 'About',
        path: 'content/about',
        format: 'json',
        ui: { router: () => '/about' },
        fields: [
          textarea('seoDescription', 'SEO description'),
          { type: 'string', name: 'title', label: 'Page title' },
          { type: 'string', name: 'heading', label: 'Heading' },
          { type: 'image', name: 'backgroundImage', label: 'Background image', accept: 'image' },
          { type: 'string', name: 'paragraphs', label: 'About paragraphs', list: true, ui: { component: 'textarea' } },
          { type: 'object', name: 'details', label: 'Areas of expertise', list: true, fields: detailFields },
        ],
      },
      {
        name: 'work',
        label: 'Work',
        path: 'content/work',
        format: 'json',
        ui: { router: () => '/work' },
        fields: [
          textarea('seoDescription', 'SEO description'),
          { type: 'string', name: 'title', label: 'Page title' },
          { type: 'string', name: 'heading', label: 'Heading' },
          { type: 'image', name: 'backgroundImage', label: 'Background image', accept: 'image' },
          { type: 'image', name: 'heroImage', label: 'Work photo', accept: 'image' },
          { type: 'string', name: 'introParagraphs', label: 'Introduction paragraphs', list: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'experienceHeading', label: 'Experience section heading' },
          { type: 'object', name: 'roles', label: 'Roles & experience', list: true, fields: roleFields },
          { type: 'string', name: 'photoBadgeTitle', label: 'Photo badge title' },
          { type: 'string', name: 'photoBadgeLocation', label: 'Photo badge location' },
          { type: 'string', name: 'skillsHeading', label: 'Skills heading' },
          textarea('skillsIntro', 'Skills introduction'),
          { type: 'object', name: 'skills', label: 'Skills', list: true, fields: skillFields },
          { type: 'string', name: 'academicHeading', label: 'Academic section heading' },
          { type: 'string', name: 'educationHeading', label: 'Education heading' },
          { type: 'object', name: 'education', label: 'Education', list: true, fields: educationFields },
          { type: 'string', name: 'certificationsHeading', label: 'Certifications heading' },
          { type: 'object', name: 'certifications', label: 'Licenses & certifications', list: true, fields: certificationFields },
        ],
      },

    ],
  },
});
