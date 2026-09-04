export type ProjectCategory = 'Product' | 'Web' | 'Brand' | 'Creative Tech';

export type Project = {
  slug: string;
  number: string;
  title: string;
  thesis: string;
  category: ProjectCategory;
  disciplines: string[];
  role: string;
  year: string;
  accent: string;
  foreground: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'clarity-from-complexity',
    number: '01',
    title: 'Clarity from complexity',
    thesis: 'A product-system story about turning a dense workflow into one confident path.',
    category: 'Product',
    disciplines: ['Strategy', 'Product design', 'Systems'],
    role: 'End-to-end product partner',
    year: 'Case study framework',
    accent: '#315b4d',
    foreground: '#f4f1ea',
    challenge:
      'The strongest product stories begin with a real tension: too much complexity, too little confidence, or a workflow that asks users to do the hard work.',
    approach:
      'Frame the decision, map the system, reduce the interaction cost, and prototype the riskiest moments before polishing the whole experience.',
    outcome:
      'This page is structured for a verified outcome, user evidence, and measurable impact when final project content is supplied.',
  },
  {
    slug: 'launch-with-a-point-of-view',
    number: '02',
    title: 'A launch with a point of view',
    thesis: 'A conversion-focused web story built to make a new idea feel immediately clear.',
    category: 'Web',
    disciplines: ['Narrative', 'Interface', 'Frontend'],
    role: 'Creative direction and build',
    year: 'Case study framework',
    accent: '#d8a7be',
    foreground: '#101113',
    challenge:
      'New offers often arrive with too much context and no obvious entry point. The work is to find the one promise worth leading with.',
    approach:
      'Shape an outcome-led narrative, create a distinctive visual rhythm, and build a fast interface with clear calls to action at every stage.',
    outcome:
      'Ready for a real launch story, before-and-after evidence, and verified conversion results.',
  },
  {
    slug: 'one-language-every-touchpoint',
    number: '03',
    title: 'One language, every touchpoint',
    thesis: 'A flexible identity system designed to stay recognizable as the product grows.',
    category: 'Brand',
    disciplines: ['Identity', 'Design system', 'Motion'],
    role: 'Brand systems partner',
    year: 'Case study framework',
    accent: '#a9bde1',
    foreground: '#101113',
    challenge:
      'A growing brand can quickly become a collection of exceptions. The opportunity is to build rules that create range without losing recognition.',
    approach:
      'Define the essential signals, turn them into reusable design decisions, and pressure-test the system across real product and campaign moments.',
    outcome:
      'Ready for the final identity assets, rollout examples, and evidence of adoption.',
  },
  {
    slug: 'tools-for-better-decisions',
    number: '04',
    title: 'Tools for better decisions',
    thesis: 'An interactive concept where information becomes useful at exactly the right moment.',
    category: 'Creative Tech',
    disciplines: ['Prototyping', 'AI', 'Interaction'],
    role: 'Concept, prototype, and build',
    year: 'Case study framework',
    accent: '#ff5a36',
    foreground: '#101113',
    challenge:
      'Technology creates value only when it improves a decision or removes meaningful friction. Novelty alone is not the outcome.',
    approach:
      'Start with the decision, prototype the smallest useful interaction, and evolve the system only when the evidence supports it.',
    outcome:
      'Ready for a working prototype, learning log, and validated product signal.',
  },
];

export const projectCategories = [
  'All',
  'Product',
  'Web',
  'Brand',
  'Creative Tech',
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
