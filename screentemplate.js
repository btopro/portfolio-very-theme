/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `screen-template`
 * 
 * @demo index.html
 * @element screen-template
 */
export class ScreenTemplate extends DDDSuper(LitElement) {

  static get tag() {
    return "screen-template";
  }

  constructor() {
    super();
    this.title = "";
    this.color = "";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      color: { type: String},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        height: 100vh;
        max-width: 100vw;
        color-scheme: light dark;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
      }
      .wrapper {
        height: 100vh;
        max-width: 100vw;
        background-color: var(--theme-default-color);
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        flex-direction: row;
      }
      .image-container {
        flex: 1;
        text-align: center;
        max-width: 100%;
      }
      .content-container {
        flex: 2;
        font-size: var(--ddd-font-size-s);
        text-align: left;
        max-width: 100%;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
      }
      ::slotted(img[slot="image"]) {
        width: 100%;
        max-width: 350px;
        height: auto;
        border-radius: var(--ddd-border-radius, 8px);
      }

      /* Media query for smaller screens */
      @media (max-width: 742px) {
        .wrapper {
          width: 100vw;
          height: auto;
          display: flex;
          flex-direction: column-reverse;
        }
        .content-container {
          font-size: var(--ddd-font-size-4xs);
        }
        ::slotted(img[slot="image"]) {
          max-width: 150px;
          height: auto;
        }
      }
    `];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('color')) {
      this.style.setProperty('--theme-default-color', `var(--ddd-theme-default-${this.color})`);
    }
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="image-container">
          <slot name="image"></slot>
        </div>
        <div class="content-container">
          <h1 class="title">${this.title}</h1>
          <slot class="content"></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(ScreenTemplate.tag, ScreenTemplate);