import TProject from '@/types/ProjectType';

const portfolio = {
	description: 'This portfolio website',
	background:
		'A fairly simple portfolio website, \nthat runs completely serverless.\nThe website is written in VueJS and TypeScript.',
	hasLivePreview: true,
	livePreview: 'https://keimeno.party',
	hasSourceCode: true,
	sourceCode: 'https://github.com/Keimeno/personal-portfolio',
	screenshots: ['screenshot-1', 'screenshot-2', 'screenshot-3'],
	hasReadme: true,
	readme:
		"# Personal Portfolio\n\n[![Coverage Status](https://coveralls.io/repos/github/Keimeno/personal-portfolio/badge.svg)](https://coveralls.io/github/Keimeno/personal-portfolio)\n[![Build Status](https://travis-ci.com/Keimeno/personal-portfolio.svg?branch=develop)](https://travis-ci.com/Keimeno/personal-portfolio)\n\n## Description\n\nThis is my personal portfolio website. If you're interested in using it for yourself, go by the following steps.\n\n## Setup\n\n-   npm i\n-   npm start (for development purposes)\n-   npm i -g firebase\n-   firebase init\n-   npm run build\n-   npm run deploy\n\n## Configuration\n\nTo configure this website to your own, you need to change the following files:\n\n```bash\nsrc/\n    store/\n        storage/\n			projects/\n			open-source/\n				index.ts\n				list.ts\n				items/\n					index.ts\n					...\n	assets/\n		projects/\n		open-source/\n			screenshots/\n				.../\n					...\n			...\n\n```\n\nAs it is easily possible to test out what you need to change to expect what behavior I will not provide any further documentation about this. Especially because this is not supposed to be widely used.\n"
} as TProject;

export default portfolio;
