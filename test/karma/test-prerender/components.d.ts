/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { JSXElements } from '@stencil/core';




export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends JSXElements.HTMLAttributes {}

  interface CmpA {}
  interface CmpAAttributes extends JSXElements.HTMLAttributes {}

  interface CmpB {}
  interface CmpBAttributes extends JSXElements.HTMLAttributes {}

  interface CmpC {}
  interface CmpCAttributes extends JSXElements.HTMLAttributes {}

  interface CmpD {}
  interface CmpDAttributes extends JSXElements.HTMLAttributes {}

  interface CmpScopedA {}
  interface CmpScopedAAttributes extends JSXElements.HTMLAttributes {}

  interface CmpScopedB {}
  interface CmpScopedBAttributes extends JSXElements.HTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'CmpA': Components.CmpA;
    'CmpB': Components.CmpB;
    'CmpC': Components.CmpC;
    'CmpD': Components.CmpD;
    'CmpScopedA': Components.CmpScopedA;
    'CmpScopedB': Components.CmpScopedB;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'cmp-a': Components.CmpAAttributes;
    'cmp-b': Components.CmpBAttributes;
    'cmp-c': Components.CmpCAttributes;
    'cmp-d': Components.CmpDAttributes;
    'cmp-scoped-a': Components.CmpScopedAAttributes;
    'cmp-scoped-b': Components.CmpScopedBAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCmpAElement extends Components.CmpA, HTMLElement {}
  var HTMLCmpAElement: {
    prototype: HTMLCmpAElement;
    new (): HTMLCmpAElement;
  };

  interface HTMLCmpBElement extends Components.CmpB, HTMLElement {}
  var HTMLCmpBElement: {
    prototype: HTMLCmpBElement;
    new (): HTMLCmpBElement;
  };

  interface HTMLCmpCElement extends Components.CmpC, HTMLElement {}
  var HTMLCmpCElement: {
    prototype: HTMLCmpCElement;
    new (): HTMLCmpCElement;
  };

  interface HTMLCmpDElement extends Components.CmpD, HTMLElement {}
  var HTMLCmpDElement: {
    prototype: HTMLCmpDElement;
    new (): HTMLCmpDElement;
  };

  interface HTMLCmpScopedAElement extends Components.CmpScopedA, HTMLElement {}
  var HTMLCmpScopedAElement: {
    prototype: HTMLCmpScopedAElement;
    new (): HTMLCmpScopedAElement;
  };

  interface HTMLCmpScopedBElement extends Components.CmpScopedB, HTMLElement {}
  var HTMLCmpScopedBElement: {
    prototype: HTMLCmpScopedBElement;
    new (): HTMLCmpScopedBElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'cmp-a': HTMLCmpAElement
    'cmp-b': HTMLCmpBElement
    'cmp-c': HTMLCmpCElement
    'cmp-d': HTMLCmpDElement
    'cmp-scoped-a': HTMLCmpScopedAElement
    'cmp-scoped-b': HTMLCmpScopedBElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'cmp-a': HTMLCmpAElement;
    'cmp-b': HTMLCmpBElement;
    'cmp-c': HTMLCmpCElement;
    'cmp-d': HTMLCmpDElement;
    'cmp-scoped-a': HTMLCmpScopedAElement;
    'cmp-scoped-b': HTMLCmpScopedBElement;
  }

}
