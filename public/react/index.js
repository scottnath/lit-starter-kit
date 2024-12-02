import React, { forwardRef, useImperativeHandle } from 'react';
import { css, LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

var styles = css `
:host {
  display: inline-flex;
}

button {
  cursor: pointer;
}
`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * An example button component
 *
 * @tag my-button
 *
 * @slot - The main content for the button
 *
 */
let MyButton$1 = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'Hey there';
    }
    render() {
        return html `
      <button>
        <slot></slot>
      </button>
    `;
    }
};
MyButton$1.styles = styles;
__decorate([
    property({ type: String, attribute: 'header' })
], MyButton$1.prototype, "header", void 0);

const MyButton = forwardRef((props, forwardedRef) => {
  const { header, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-button",
    {
      ...filteredProps,
      header: props.header,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});

export { MyButton };
