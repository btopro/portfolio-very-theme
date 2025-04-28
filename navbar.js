/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "@haxtheweb/simple-cta/simple-cta.js";
/**
 * `screen-template`
 * 
 * @demo index.html
 * @element nav-bar
 */
export class NavBar extends DDDSuper(LitElement) {

  static get tag() {
    return "nav-bar";
  }

  constructor() {
    super();
    this._width = 0;
    globalThis.addEventListener('resize', () => {
      this._width = globalThis.innerWidth;
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      _width: { type: Number },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this._width = globalThis.innerWidth;
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color-scheme: light dark;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        width: 100%;
      }
      .wrapper {
        width: 100%;
        height: 14%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .content {
        font-size: var(--ddd-font-size-m);
        text-align: center;
      }
      .sectionButtons{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      simple-cta {
        display: flex;
        width: 20%;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
      details {
        display: flex;
        flex-direction: column;
      }
      summary {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
      }
      img {
        display: flex;
        flex-direction: row;
      }
      @media (max-width: 742px) {
        :host {
          color-scheme: light dark;
          color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
        }
        .wrapper {
          flex-wrap: wrap;
          height: auto;
          padding: var(--ddd-spacing-1);
        }
        .sectionButtons {
          flex-wrap: wrap;
          gap: var(--ddd-spacing-1);
        }
        simple-cta {
          width: 50%;
          flex: 1 1 auto;
          font-size: var(--ddd-font-size-4xs);
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    if(this._width < 742){
      return html`
      <div class="wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/640px-Apple_logo_grey.svg.png" alt="Logo" width="30" height="auto">
        <details>
          <summary>Menu</summary>
          <div class="sectionButtons">
            <simple-cta><a href="#About">About</a></simple-cta>
            <simple-cta><a href=#Work-Experience>Work Experience</a></simple-cta>
            <simple-cta><a href=#Skills>Skills</a></simple-cta>
            <simple-cta><a href=#Projects>Projects</a></simple-cta>
            <simple-cta><a href=#Contact>Contact</a></simple-cta>
          </div>
        </details>
      </div>`;
    } else {
      return html`
      <div class="wrapper">
        <div class="sectionButtons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/640px-Apple_logo_grey.svg.png" alt="Logo" width="50" height="auto">
          <simple-cta><a href="#About">About</a></simple-cta>
          <simple-cta><a href=#Work-Experience>Work Experience</a></simple-cta>
          <simple-cta><a href=#Skills>Skills</a></simple-cta>
          <simple-cta><a href=#Projects>Projects</a></simple-cta>
          <simple-cta><a href=#Contact>Contact</a></simple-cta>         
        </div>
      </div>`;
    }
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);