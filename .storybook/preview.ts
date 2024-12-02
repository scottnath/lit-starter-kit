import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';
import { setWcStorybookHelpersConfig } from 'wc-storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

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
