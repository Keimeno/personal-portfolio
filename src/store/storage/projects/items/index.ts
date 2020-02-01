import neojax from './neojax';
import portfolio from './portfolio';
import dashboard from './dashboard';
import neruxvaceChatlog from './neruxvace-chatlog';
import neruxvaceRedeem from './neruxvace-redeem';
import neruxvaceStatistics from './neruxvace-statistics';
import html2Pdf from './html-2-pdf';

const items = {
  neojax,
  portfolio,
  dashboard,
  'neruxvace-chatlog': neruxvaceChatlog,
  'neruxvace-redeem': neruxvaceRedeem,
  'neruxvace-statistics': neruxvaceStatistics,
  'html-2-pdf': html2Pdf,
};

export default items;
