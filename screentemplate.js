/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `screen-template`
 * 
 * @demo index.html
 * @element screen-template
 */
export class ScreenTemplate extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "screen-template";
  }

  constructor() {
    super();
    this.title = "";
    this.color = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
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
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        height: 100vh;
        max-width: 100vw;
      }
      .wrapper {
        height: 100vh;
        max-width: 100vw;
        background-color: var(--theme-default-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        flex-direction: row; /* Default: image and content side by side */
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
      }
      ::slotted(img[slot="image"]) {
        width: 100%; /* Default: Full width of container */
        max-width: 350px; /* Limit maximum width */
        height: auto;
        border-radius: var(--ddd-border-radius, 8px);
      }

      /* Media query for smaller screens */
      @media (max-width: 768px) {
        .wrapper {
          height: auto;
          width: 100vw;
          flex-direction: column-reverse;
          padding: var(--ddd-spacing-2);
        }
        .image-container, .content-container {
          flex: unset; /* Remove flex sizing */
          width: 100%; /* Full width for both containers */
        }
        .content-container {
          font-size: var(--ddd-font-size-xxxs);
        }
        ::slotted(img[slot="image"]) {
          max-width: 150px; /* Allow image to scale down */
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
          <slot name="image"></slot> <!-- Slot for the image -->
        </div>
        <div class="content-container">
          <h1 class="title"><u>${this.title}</u></h1>
          <slot class="content"></slot> <!-- Slot for the description -->
        </div>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
   static get haxProperties() {
     return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
       .href;
   }
}

globalThis.customElements.define(ScreenTemplate.tag, ScreenTemplate);