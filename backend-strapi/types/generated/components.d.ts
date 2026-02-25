import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<['red', 'white', 'black']>;
    hasBorderRadius: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    hasIcon: Schema.Attribute.Boolean;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ComponentsJumbotron extends Struct.ComponentSchema {
  collectionName: 'components_components_jumbotrons';
  info: {
    displayName: 'jumbotron';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<['red', 'white', 'black']>;
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'components.button', false>;
    hasBgImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    hasButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCtaElement extends Struct.ComponentSchema {
  collectionName: 'components_elements_cta_elements';
  info: {
    displayName: 'ctaElement';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<['red', 'white', 'black']>;
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    hasButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsGridElement extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_elements';
  info: {
    displayName: 'gridElement';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<['red', 'white', 'black']>;
    hasBgImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'elements.grid-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsGridItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_items';
  info: {
    displayName: 'gridItem';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<['red', 'white', 'black']>;
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    hasBgImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_nav_items';
  info: {
    displayName: 'navItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ElementsReferenceElement extends Struct.ComponentSchema {
  collectionName: 'components_elements_reference_elements';
  info: {
    displayName: 'referenceElement';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<['red', 'white', 'black']>;
    hasBgImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'elements.reference-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsReferenceItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_reference_items';
  info: {
    displayName: 'referenceItem';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.String;
    hasButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.jumbotron': ComponentsJumbotron;
      'elements.cta-element': ElementsCtaElement;
      'elements.grid-element': ElementsGridElement;
      'elements.grid-item': ElementsGridItem;
      'elements.nav-item': ElementsNavItem;
      'elements.reference-element': ElementsReferenceElement;
      'elements.reference-item': ElementsReferenceItem;
    }
  }
}
