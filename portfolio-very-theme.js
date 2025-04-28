/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js";
import "./navbar.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        color-scheme: light dark;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
      }
      .wrapper {
        height: 100%;
        width: 100%;
        display: flex; 
        flex-direction: column;
      }
      scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
      /* Media query for smaller screens */
      @media (max-width: 742px) {
        .wrapper {
          width: 100vw;
          height: auto;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <nav-bar></nav-bar>
      <scroll-button></scroll-button>
      <div class="wrapper">
        <slot></slot>
      </div>
      `
      ;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);