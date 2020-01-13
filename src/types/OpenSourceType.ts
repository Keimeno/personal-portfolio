import TShared from './SharedType';

type TOpenSource = TShared & {
	readonly myPart: string;
	readonly myPullRequests: TPullRequest[];
};

type TPullRequest = {
	name: string;
	url: string;
};

export default TOpenSource;
