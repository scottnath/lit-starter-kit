import './index.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('MyButton', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture(html`<my-button>My Button</my-button>`);
      await expect(el).to.be.accessible();
    });
  });
});
