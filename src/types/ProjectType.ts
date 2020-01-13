import TShared from './SharedType';

type TProject = TShared & {
	readonly background: string;
	readonly screenshots: string[];
	readonly hasLivePreview: boolean;
	readonly hasSourceCode: boolean;
	readonly livePreview?: string;
	readonly sourceCode?: string;
};

export default TProject;
