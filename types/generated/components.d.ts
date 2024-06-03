import type { Schema, Attribute } from '@strapi/strapi';

export interface OperationHour extends Schema.Component {
  collectionName: 'components_operation_hours';
  info: {
    displayName: 'hour';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    monday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    tuesday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    wednesday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    thursday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    friday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    saturday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    sunday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    from: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'00:00'>;
    to: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'00:00'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'operation.hour': OperationHour;
    }
  }
}
