import TProject from '@/types/ProjectType';

const coreLibrary = {
  description: 'The core library of the Luminu Project',
  background:
    'Implements shared translations, styles, services and types\nUsed in all Luminu Webprojects.',
  hasLivePreview: false,
  hasSourceCode: true,
  sourceCode: 'https://github.com/LuminuNET/core-library',
  screenshots: [],
  hasReadme: true,
  readme:
    '# @luminu/core | Luminu Web Core\n\n## Description\n\nCore functions that may be shared across apps.\n\n## Documentation\n\n### Services\n\n#### Locale\n\nReturns namespaced methods\n\n##### Methods\n\n- getLocale() => void\n- toggleLocale() => void\n\n#### Buffer\n\nReturns an object\n\n##### Methods\n\n- writeInt(number) => void\n- writeString(string) => void\n\n##### Getters\n\n- buffer: Buffer\n\n#### Redis\n\nReturns an object\n',
} as TProject;

export default coreLibrary;
