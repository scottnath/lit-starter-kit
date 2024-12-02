import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './button.styles.js';

/**
 * An example button component
 * 
 * @tag my-button
 * 
 * @slot - The main content for the button
 * 
 */
export default class MyButton extends LitElement {
  static override styles = styles;

  @property({ type: String, attribute: 'header' }) 
  header = 'Hey there';

  override render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

export { MyButton };