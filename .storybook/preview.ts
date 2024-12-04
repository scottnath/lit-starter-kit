import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';
import { setWcStorybookHelpersConfig } from 'wc-storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import './code-bubble-setup.js';
import './styles.css';
import '../public/html/index.js';

import type { Preview } from '@storybook/web-components';

setWcStorybookHelpersConfig({ typeRef: 'expandedType' });
setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true, // provides descriptions and additional info for controls
      sort: 'alpha', // sorts controls in alphabetical order
    },
  },
  decorators: [withActions],
};

export default preview;
