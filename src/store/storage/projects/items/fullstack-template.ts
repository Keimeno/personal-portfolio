import TProject from '@/types/ProjectType';

const fullstackTemplate = {
  description: 'An extensive fullstack template.',
  background:
    'Written in VueJS, TypeScript and NodeJS.\nSupplies an extensive scheme for building efficient RESTful services\nand vue apps, with unit-/integration tests.',
  hasLivePreview: false,
  hasSourceCode: true,
  sourceCode: 'https://github.com/LuminuNET/fullstack-template',
  screenshots: [],
  hasReadme: true,
  readme:
    '# @luminu/fullstack-template\n\n## Setup\n\n1. Use Node version 12+\n2. Clone this repository at `git@git.luminu.net:Keimeno/full-stack-template.git`,\n   then change the remote origin to your new repository.\n3. Install everything with `npm install`\n\n## Before use\n\n1. Change the name of the app in the manifest.json and index.html, as well as in the package.json',
} as TProject;

export default fullstackTemplate;
