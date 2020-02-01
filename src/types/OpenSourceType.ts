import TShared from './SharedType';

type TOpenSource = TShared & {
  readonly myPart: string;
  readonly myPullRequests: TPullRequest[];
};

interface TPullRequest {
  name: string;
  url: string;
}

export default TOpenSource;
