<template id='search-box-template'>
  <style>
  </style>


  </template>

  <script>
    (function () {
      let thisImportDoc = document.currentScript.ownerDocument;

      class SearchBox extends HTMLElement {
        constructor() {
          super();

          let shadowRoot = this.attachShadow({mode: 'open'});
          let template = SearchBox.template;
          shadowRoot.appendChild(
            document.importNode(template.content, true)
          );
        }

        static get template() {
          if (!this._template) {
            this._template = thisImportDoc.querySelector('#search-box-template');
          }
          return this._template;
        }

        connectedCallback() {
          console.log('search-box connected to page', this);

          this.addRealHiddenInput();

          //------------------------------ Polyfill
          const supportNativeShadowDom = !!HTMLElement.prototype.attachShadow;
          if (!supportNativeShadowDom) {
            ShadyCSS.applyStyle(this);
          }
        }
      }

      ShadyCSS.prepareTemplate(SearchBox.template, 'search-box');

      customElements.define('search-box', SearchBox);
    })();
  </script>
