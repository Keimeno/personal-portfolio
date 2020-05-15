import TProject from '@/types/ProjectType';

const keyRedeemFeedback = {
  description: 'Redeem a key & give feedback',
  background:
    'Here you can redeem a key, you have won\nand get a specific reward.\nYou can as well give feedback (view screenshot 1)',
  hasLivePreview: false,
  hasSourceCode: true,
  sourceCode: 'https://github.com/LuminuNET/key-redeem-feedback',
  screenshots: ['screenshot-1', 'screenshot-2', 'screenshot-3', 'screenshot-4'],
  hasReadme: true,
  readme:
    '# Beta Key Redeem\n\n## Side note\n\n- Use NodeJS version 12+, or otherwise you will automatically modify the lockfile during the installation.\n\n## Setup\n\n### Development\n\n- import `./sqldump/development.sql.zip` into your local database (Only required once)\n- Enter .env variables according to `./packages/service/.sample-env` and use NODE_ENV=DEV\n- npm login --scope=@luminu --registry=http://repo.luminu.net/repository/luminu-node/\n- npm install\n- npm build:pre\n- npm start\n\n### Production\n\n- import `./sqldump/production.sql.zip` into the production database (Only required once | If there are any errors, create the database `luminu_web` | This will only import the db structure)\n- Enter .env variables according to `./packages/service/.sample-env` and use NODE_ENV=PROD\n- npm login --scope=@luminu --registry=http://repo.luminu.net/repository/luminu-node/\n- npm install\n- npm build:pre\n- npm build\n- npm deploy\n',
} as TProject;

export default keyRedeemFeedback;
