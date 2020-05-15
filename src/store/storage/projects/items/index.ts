import neojax from './neojax';
import portfolio from './portfolio';
import dashboard from './dashboard';
import neruxvaceChatlog from './neruxvace-chatlog';
import neruxvaceRedeem from './neruxvace-redeem';
import neruxvaceStatistics from './neruxvace-statistics';
import html2Pdf from './html-2-pdf';
import oidcServer from './oidc-server';
import keyRedeemFeedback from './key-redeem-feedback';
import fullstackTemplate from './fullstack-template';
import chatModeration from './chat-moderation';
import coreLibrary from './core-library';
import componentsLibrary from './components-library';

const items = {
  neojax,
  portfolio,
  dashboard,
  'neruxvace-chatlog': neruxvaceChatlog,
  'neruxvace-redeem': neruxvaceRedeem,
  'neruxvace-statistics': neruxvaceStatistics,
  'html-2-pdf': html2Pdf,
  'oidc-server': oidcServer,
  'key-redeem-feedback': keyRedeemFeedback,
  'fullstack-template': fullstackTemplate,
  'chat-moderation': chatModeration,
  'core-library': coreLibrary,
  'components-library': componentsLibrary,
};

export default items;
