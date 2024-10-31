import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiATypicalDayATypicalDay extends Struct.SingleTypeSchema {
  collectionName: 'a_typical_days';
  info: {
    singularName: 'a-typical-day';
    pluralName: 'a-typical-days';
    displayName: 'aTypicalDay';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    reasons: Schema.Attribute.Component<'component.image-title-desc', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::a-typical-day.a-typical-day'
    >;
  };
}

export interface ApiAllFaqAllFaq extends Struct.SingleTypeSchema {
  collectionName: 'all_faqs';
  info: {
    singularName: 'all-faq';
    pluralName: 'all-faqs';
    displayName: 'allFaq';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    faq: Schema.Attribute.Component<'component.title-description-type', true>;
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    head: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::all-faq.all-faq'
    >;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blogs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
  };
}

export interface ApiCamperTestimonialCamperTestimonial
  extends Struct.SingleTypeSchema {
  collectionName: 'camper_testimonials';
  info: {
    singularName: 'camper-testimonial';
    pluralName: 'camper-testimonials';
    displayName: 'camperTestimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'card.testimonial', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::camper-testimonial.camper-testimonial'
    >;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'contact_uses';
  info: {
    singularName: 'contact-us';
    pluralName: 'contact-uses';
    displayName: 'contactUS';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    contactUsForm: Schema.Attribute.Component<'component.contact-us', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    >;
  };
}

export interface ApiCurrentAndNewFamilyResourceCurrentAndNewFamilyResource
  extends Struct.SingleTypeSchema {
  collectionName: 'current_and_new_family_resources';
  info: {
    singularName: 'current-and-new-family-resource';
    pluralName: 'current-and-new-family-resources';
    displayName: 'currentAndNewFamilyResource';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    resources: Schema.Attribute.Component<'component.nav-link', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::current-and-new-family-resource.current-and-new-family-resource'
    >;
  };
}

export interface ApiDateAndRateDateAndRate extends Struct.SingleTypeSchema {
  collectionName: 'date_and_rates';
  info: {
    singularName: 'date-and-rate';
    pluralName: 'date-and-rates';
    displayName: 'dateAndRate';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    sessionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    visitingSchedule: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    sessions: Schema.Attribute.Component<'component.price-card', true>;
    othersTitle: Schema.Attribute.String;
    services: Schema.Attribute.Component<
      'component.title-and-description-card',
      true
    >;
    additionalCostTitle: Schema.Attribute.String;
    phone: Schema.Attribute.BigInteger;
    email: Schema.Attribute.Email;
    footerImage: Schema.Attribute.String;
    covidTitle: Schema.Attribute.String;
    covidDescription: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::date-and-rate.date-and-rate'
    >;
  };
}

export interface ApiFacilityFacility extends Struct.SingleTypeSchema {
  collectionName: 'facilities';
  info: {
    singularName: 'facility';
    pluralName: 'facilities';
    displayName: 'facility';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    history: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    cabins: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    videoBanner: Schema.Attribute.Component<'component.video-card', false>;
    stay: Schema.Attribute.Component<
      'component.titles-and-descriptions',
      false
    >;
    food: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    health: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    activities: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    sport: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    waterfront: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    about: Schema.Attribute.Component<
      'component.title-descriptions-images',
      false
    >;
    staff: Schema.Attribute.Component<
      'component.title-descriptions-images',
      false
    >;
    footer: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::facility.facility'
    >;
  };
}

export interface ApiFamilyCampFamilyCamp extends Struct.SingleTypeSchema {
  collectionName: 'family_camps';
  info: {
    singularName: 'family-camp';
    pluralName: 'family-camps';
    displayName: 'familyCamp';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    photos: Schema.Attribute.Component<'component.image-and-description', true>;
    postCamp: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    datesAndRates: Schema.Attribute.Component<
      'component.title-and-description',
      false
    >;
    additionalInfo: Schema.Attribute.Component<
      'component.image-title-description-button',
      false
    >;
    rsvp: Schema.Attribute.Component<
      'component.image-title-description-button',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::family-camp.family-camp'
    >;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Schema.Attribute.String;
    blogsTitle: Schema.Attribute.String;
    contactsTitle: Schema.Attribute.String;
    socialTitle: Schema.Attribute.String;
    blogs: Schema.Attribute.Component<'component.blog-card', true>;
    getInTouch: Schema.Attribute.Component<'component.get-in-touch', false>;
    followUs: Schema.Attribute.Component<'component.socials', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::footer.footer'>;
  };
}

export interface ApiHealthAndSafetyHealthAndSafety
  extends Struct.SingleTypeSchema {
  collectionName: 'health_and_safeties';
  info: {
    singularName: 'health-and-safety';
    pluralName: 'health-and-safeties';
    displayName: 'healthAndSafety';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    safety: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    accreditation: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    healthCenter: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    allergies: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    about: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    camperAttention: Schema.Attribute.Component<
      'component.title-and-description',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::health-and-safety.health-and-safety'
    >;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'HomePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heroSection: Schema.Attribute.Component<'component.hero', false>;
    whatIsMarimeta: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    aboutMarimeta: Schema.Attribute.Component<
      'component.about-marimeta-campers',
      false
    >;
    ourFacilitiesCards: Schema.Attribute.Component<'component.card', true>;
    ourFacilitiesParent: Schema.Attribute.Component<
      'component.parent-card',
      false
    >;
    countDownTimer: Schema.Attribute.Component<'component.timer', false>;
    gallery: Schema.Attribute.Component<'component.gallery', false>;
    galleryMedia: Schema.Attribute.DynamicZone<['component.video-or-image']>;
    joinOurMarimetaStaff: Schema.Attribute.Component<
      'component.about-marimeta-campers',
      false
    >;
    contactUs: Schema.Attribute.Component<'component.contact-us', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    >;
  };
}

export interface ApiHomeSicknessHomeSickness extends Struct.SingleTypeSchema {
  collectionName: 'home_sicknesses';
  info: {
    singularName: 'home-sickness';
    pluralName: 'home-sicknesses';
    displayName: 'homeSickness';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    descriptions: Schema.Attribute.Component<'component.description', true>;
    benefits: Schema.Attribute.Component<'component.image-descriptions', true>;
    pageFooter: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-sickness.home-sickness'
    >;
  };
}

export interface ApiImportantStaffDateImportantStaffDate
  extends Struct.SingleTypeSchema {
  collectionName: 'important_staff_dates';
  info: {
    singularName: 'important-staff-date';
    pluralName: 'important-staff-dates';
    displayName: 'importantStaffDate';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    staffDates: Schema.Attribute.Component<'component.description', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::important-staff-date.important-staff-date'
    >;
  };
}

export interface ApiJoinOurMarimetaStaffJoinOurMarimetaStaff
  extends Struct.SingleTypeSchema {
  collectionName: 'join_our_marimeta_staffs';
  info: {
    singularName: 'join-our-marimeta-staff';
    pluralName: 'join-our-marimeta-staffs';
    displayName: 'joinOurMarimetaStaff';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    about: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    rolesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    howWeHire: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    summerSessions: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    roles: Schema.Attribute.Component<
      'card.image-title-desc-link-button',
      true
    >;
    joiningLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://airtable.com/app2AbR1ioovtVGLy/pagbpOK3XxI2XVZuB/form'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::join-our-marimeta-staff.join-our-marimeta-staff'
    >;
  };
}

export interface ApiLocationAndTransportationLocationAndTransportation
  extends Struct.SingleTypeSchema {
  collectionName: 'location_and_transportations';
  info: {
    singularName: 'location-and-transportation';
    pluralName: 'location-and-transportations';
    displayName: 'locationAndTransportation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    location: Schema.Attribute.Component<
      'component.title-and-description',
      false
    >;
    howToReach: Schema.Attribute.Component<'component.image-title-desc', false>;
    question: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::location-and-transportation.location-and-transportation'
    >;
  };
}

export interface ApiMapMap extends Struct.SingleTypeSchema {
  collectionName: 'maps';
  info: {
    singularName: 'map';
    pluralName: 'maps';
    displayName: 'map';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    pointers: Schema.Attribute.Component<'map.map-pointer', true>;
    mapImage: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::map.map'>;
  };
}

export interface ApiMeetTheDirectorMeetTheDirector
  extends Struct.SingleTypeSchema {
  collectionName: 'meet_the_directors';
  info: {
    singularName: 'meet-the-director';
    pluralName: 'meet-the-directors';
    displayName: 'meetTheDirector';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    directors: Schema.Attribute.Component<'component.director', false>;
    asstDirector: Schema.Attribute.Component<'component.director', false>;
    directorOrOperations: Schema.Attribute.Component<
      'component.director',
      false
    >;
    petsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    dogs: Schema.Attribute.Component<'card.testimonial', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::meet-the-director.meet-the-director'
    >;
  };
}

export interface ApiMetaStaffMetaStaff extends Struct.SingleTypeSchema {
  collectionName: 'meta_staffs';
  info: {
    singularName: 'meta-staff';
    pluralName: 'meta-staffs';
    displayName: 'metaStaff';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    about: Schema.Attribute.Component<'component.title-and-description', false>;
    counselors: Schema.Attribute.Component<
      'component.title-descriptions-images',
      false
    >;
    feedbacksTitle: Schema.Attribute.String & Schema.Attribute.Required;
    feedbackImage: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::meta-staff.meta-staff'
    >;
  };
}

export interface ApiMiniMetaTourDayMiniMetaTourDay
  extends Struct.SingleTypeSchema {
  collectionName: 'mini_meta_tour_days';
  info: {
    singularName: 'mini-meta-tour-day';
    pluralName: 'mini-meta-tour-days';
    displayName: 'miniMetaTourDay';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    signUpBanner: Schema.Attribute.Component<'component.sub-banner', false> &
      Schema.Attribute.Required;
    generalDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    scheduleTitle: Schema.Attribute.String & Schema.Attribute.Required;
    schedules: Schema.Attribute.Component<'component.image-title-desc', true>;
    faqText: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mini-meta-tour-day.mini-meta-tour-day'
    >;
  };
}

export interface ApiNavHeaderNavHeader extends Struct.SingleTypeSchema {
  collectionName: 'nav_headers';
  info: {
    singularName: 'nav-header';
    pluralName: 'nav-headers';
    displayName: 'navHeader';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    leftNavs: Schema.Attribute.Component<'component.nav-with-options', true>;
    rightNavs: Schema.Attribute.Component<'component.nav-link', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nav-header.nav-header'
    >;
  };
}

export interface ApiOurExcitingActivitieOurExcitingActivitie
  extends Struct.SingleTypeSchema {
  collectionName: 'our_exciting_activities';
  info: {
    singularName: 'our-exciting-activitie';
    pluralName: 'our-exciting-activities';
    displayName: 'ourExcitingActivitie';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    filters: Schema.Attribute.Component<'component.button', true>;
    activities: Schema.Attribute.Component<'component.image-title-desc', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-exciting-activitie.our-exciting-activitie'
    >;
  };
}

export interface ApiOurFoodOurFood extends Struct.SingleTypeSchema {
  collectionName: 'our_foods';
  info: {
    singularName: 'our-food';
    pluralName: 'our-foods';
    displayName: 'ourFood';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    about: Schema.Attribute.Component<'component.title-and-description', false>;
    fruitAndSnack: Schema.Attribute.Component<
      'component.image-title-descriptions',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-food.our-food'
    >;
  };
}

export interface ApiOurPhilosophyOurPhilosophy extends Struct.SingleTypeSchema {
  collectionName: 'our_philosophies';
  info: {
    singularName: 'our-philosophy';
    pluralName: 'our-philosophies';
    displayName: 'ourPhilosophy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    mission: Schema.Attribute.Component<'card.testimonial', false>;
    mnm: Schema.Attribute.Component<'component.title-and-description', false>;
    morals: Schema.Attribute.Component<
      'component.title-and-description',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-philosophy.our-philosophy'
    >;
  };
}

export interface ApiOurVideoOurVideo extends Struct.SingleTypeSchema {
  collectionName: 'our_videos';
  info: {
    singularName: 'our-video';
    pluralName: 'our-videos';
    displayName: 'ourVideo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    about: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    videos: Schema.Attribute.Component<'component.video-or-image', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-video.our-video'
    >;
  };
}

export interface ApiParentTestimonialParentTestimonial
  extends Struct.SingleTypeSchema {
  collectionName: 'parent_testimonials';
  info: {
    singularName: 'parent-testimonial';
    pluralName: 'parent-testimonials';
    displayName: 'parentTestimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    head: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    testimonials: Schema.Attribute.Component<'card.testimonial', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::parent-testimonial.parent-testimonial'
    >;
  };
}

export interface ApiStaffFaqStaffFaq extends Struct.SingleTypeSchema {
  collectionName: 'staff_faqs';
  info: {
    singularName: 'staff-faq';
    pluralName: 'staff-faqs';
    displayName: 'staffFaq';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    head: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    faqs: Schema.Attribute.Component<'faq.faq-item', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::staff-faq.staff-faq'
    >;
  };
}

export interface ApiStaffTestimonialStaffTestimonial
  extends Struct.SingleTypeSchema {
  collectionName: 'staff_testimonials';
  info: {
    singularName: 'staff-testimonial';
    pluralName: 'staff-testimonials';
    displayName: 'staffTestimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    testimonials: Schema.Attribute.Component<
      'component.image-title-desc',
      true
    >;
    head: Schema.Attribute.Component<
      'component.title-and-description-card',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::staff-testimonial.staff-testimonial'
    >;
  };
}

export interface ApiWelcomeMarimetaAlumnusWelcomeMarimetaAlumnus
  extends Struct.SingleTypeSchema {
  collectionName: 'welcome_marimeta_alumni';
  info: {
    singularName: 'welcome-marimeta-alumnus';
    pluralName: 'welcome-marimeta-alumni';
    displayName: 'welcomeMarimetaAlumnus';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    registration: Schema.Attribute.Component<
      'component.image-title-description-button',
      false
    >;
    schedule: Schema.Attribute.Component<
      'component.image-title-description-button',
      false
    >;
    alumniCamp: Schema.Attribute.Component<
      'component.titles-and-descriptions',
      false
    >;
    rsvp: Schema.Attribute.Component<
      'component.titles-and-descriptions',
      false
    >;
    scrapbook: Schema.Attribute.Component<
      'component.title-descriptions-images',
      false
    >;
    sendPhotos: Schema.Attribute.Component<'component.image-title-desc', false>;
    copyrightTitle: Schema.Attribute.String & Schema.Attribute.Required;
    copyRightDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::welcome-marimeta-alumnus.welcome-marimeta-alumnus'
    >;
  };
}

export interface ApiWhyChooseMarimetaWhyChooseMarimeta
  extends Struct.SingleTypeSchema {
  collectionName: 'why_choose_marimetas';
  info: {
    singularName: 'why-choose-marimeta';
    pluralName: 'why-choose-marimetas';
    displayName: 'WhyChooseMarimeta';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'component.page-banner', false>;
    description: Schema.Attribute.Text;
    reasonsHeading: Schema.Attribute.String;
    reasonsGrid: Schema.Attribute.Component<'component.image-title-desc', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::why-choose-marimeta.why-choose-marimeta'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::a-typical-day.a-typical-day': ApiATypicalDayATypicalDay;
      'api::all-faq.all-faq': ApiAllFaqAllFaq;
      'api::blog.blog': ApiBlogBlog;
      'api::camper-testimonial.camper-testimonial': ApiCamperTestimonialCamperTestimonial;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::current-and-new-family-resource.current-and-new-family-resource': ApiCurrentAndNewFamilyResourceCurrentAndNewFamilyResource;
      'api::date-and-rate.date-and-rate': ApiDateAndRateDateAndRate;
      'api::facility.facility': ApiFacilityFacility;
      'api::family-camp.family-camp': ApiFamilyCampFamilyCamp;
      'api::footer.footer': ApiFooterFooter;
      'api::health-and-safety.health-and-safety': ApiHealthAndSafetyHealthAndSafety;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::home-sickness.home-sickness': ApiHomeSicknessHomeSickness;
      'api::important-staff-date.important-staff-date': ApiImportantStaffDateImportantStaffDate;
      'api::join-our-marimeta-staff.join-our-marimeta-staff': ApiJoinOurMarimetaStaffJoinOurMarimetaStaff;
      'api::location-and-transportation.location-and-transportation': ApiLocationAndTransportationLocationAndTransportation;
      'api::map.map': ApiMapMap;
      'api::meet-the-director.meet-the-director': ApiMeetTheDirectorMeetTheDirector;
      'api::meta-staff.meta-staff': ApiMetaStaffMetaStaff;
      'api::mini-meta-tour-day.mini-meta-tour-day': ApiMiniMetaTourDayMiniMetaTourDay;
      'api::nav-header.nav-header': ApiNavHeaderNavHeader;
      'api::our-exciting-activitie.our-exciting-activitie': ApiOurExcitingActivitieOurExcitingActivitie;
      'api::our-food.our-food': ApiOurFoodOurFood;
      'api::our-philosophy.our-philosophy': ApiOurPhilosophyOurPhilosophy;
      'api::our-video.our-video': ApiOurVideoOurVideo;
      'api::parent-testimonial.parent-testimonial': ApiParentTestimonialParentTestimonial;
      'api::staff-faq.staff-faq': ApiStaffFaqStaffFaq;
      'api::staff-testimonial.staff-testimonial': ApiStaffTestimonialStaffTestimonial;
      'api::welcome-marimeta-alumnus.welcome-marimeta-alumnus': ApiWelcomeMarimetaAlumnusWelcomeMarimetaAlumnus;
      'api::why-choose-marimeta.why-choose-marimeta': ApiWhyChooseMarimetaWhyChooseMarimeta;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
