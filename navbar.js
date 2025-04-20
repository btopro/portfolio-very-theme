/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-cta/simple-cta.js";
/**
 * `screen-template`
 * 
 * @demo index.html
 * @element nav-bar
 */
export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
    //   localesPath:
    //     new URL("./locales/screen-template.ar.json", import.meta.url).href +
    //     "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
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
      }
      .wrapper {
        /* margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4); */
        width: 100vw;
        height: 10%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      .title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        text-align: center;
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
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="sectionButtons">
    <simple-cta><a href="#1">About</a></simple-cta>
    <simple-cta><a href=#2>Projects</a></simple-cta>
    <simple-cta><a href=#3>Skills</a></simple-cta>
    <simple-cta><a href=#4>Accomplishments</a></simple-cta>
    <simple-cta><a href=#5>Contact</a></simple-cta>
  </div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
//    */
//   static get haxProperties() {
//     return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
//       .href;
//   }
}

globalThis.customElements.define(NavBar.tag, NavBar);