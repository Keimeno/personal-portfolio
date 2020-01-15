import TProject from '@/types/ProjectType';

const dashboard = {
	description: 'Unfinished dashboard',
	background:
		"A rather simple dashboard. It's intended use was to moderate\nspecific entities of a dedicated server, and to offer some\nadditional features to normal users.\nLook at the Readme for more information.",
	hasLivePreview: false,
	hasSourceCode: true,
	sourceCode: 'https://github.com/Keimeno/dashboard',
	screenshots: [],
	hasReadme: true,
	readme:
		'# Dashboard\n\nA simple dashboard, that sadly had to be discontinued.\n\n## Implemented Key Components\n\n-   Authentication system (inspired by the implicit flow)\n-   Daily redeem component\n-   Login screen & system\n-   Darkmode 🌗\n'
} as TProject;

export default dashboard;
