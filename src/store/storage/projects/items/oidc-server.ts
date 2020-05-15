import TProject from '@/types/ProjectType';

const oidcServer = {
  description: 'A fully functional OpenID Connect Server.',
  background:
    'Complete oidc server, which supports the Implicit Flow.\nWritten in VueJS and NodeJS.\nDependent on @luminu/core and @luminu/components libraries.',
  hasLivePreview: false,
  hasSourceCode: true,
  sourceCode: 'https://github.com/LuminuNET/oidc-server',
  screenshots: ['screenshot-1', 'screenshot-2', 'screenshot-3'],
  hasReadme: true,
  readme:
    '# OICD Service\n\n## Description\n\nThis is the Luminu OIDC Service, it currently only supports the Implicit Flow, according to [https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth).\nImplementation notes will most likely follow in the @luminu/core or @luminu/components repository.\n\n## Side note\n\n- requires NodeJS >= 11.6.0\n\n## Setup\n\n### Important Note\n\n- sqldump not available due to privacy reasons\n\n### Development\n\n- import `./sqldump/development.sql.zip` into your local database (Only required once)\n- Enter .env variables according to `./packages/service/.sample-env` and use NODE_ENV=DEV\n- npm login --scope=@luminu --registry=http://repo.luminu.net/repository/luminu-node/\n- npm install\n- npm build:pre\n- npm start\n\n### Production\n\n- import `./sqldump/production.sql.zip` into the production database (Only required once | If there are any errors, create the database `luminu_web` | This will only import the db structure)\n- Enter .env variables according to `./packages/service/.sample-env` and use NODE_ENV=PROD\n- npm login --scope=@luminu --registry=http://repo.luminu.net/repository/luminu-node/\n- npm install\n- npm build:pre\n- npm build\n- npm deploy\n',
} as TProject;

export default oidcServer;
