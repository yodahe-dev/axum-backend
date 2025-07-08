import type { Schema, Struct } from '@strapi/strapi';

export interface CrowdSourcingPageBenefits extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    highlight: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_case_studies';
  info: {
    displayName: 'caseStudies';
  };
  attributes: {
    challenge: Schema.Attribute.Text & Schema.Attribute.Required;
    metrics: Schema.Attribute.Component<'crowd-sourcing-page.metrics', true>;
    result: Schema.Attribute.Text;
    solution: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageFaqs extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageMetrics extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_metrics';
  info: {
    displayName: 'metrics';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageModelBenefits extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_model_benefits';
  info: {
    displayName: 'modelBenefits';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageOverviewCrowdSourcing
  extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_overview_crowd_sourcings';
  info: {
    displayName: 'overviewCrowdSourcing';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageOverviewTraditionalSecurity
  extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_overview_traditional_securities';
  info: {
    displayName: 'overviewTraditionalSecurity';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageSteps extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    stepNumber: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CrowdSourcingPageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_crowd_sourcing_page_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DifferentiatorDifferentiator extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_differentiators';
  info: {
    displayName: 'Differentiator';
    icon: 'bulletList';
  };
  attributes: {
    differentiatorIconName: Schema.Attribute.String & Schema.Attribute.Required;
    differentiatorPoint: Schema.Attribute.Component<
      'differentiator.differentiator-points',
      true
    > &
      Schema.Attribute.Required;
    differentiatorTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DifferentiatorDifferentiatorPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_differentiator_points';
  info: {
    displayName: 'differentiatorPoints';
    icon: 'bulletList';
  };
  attributes: {
    differentiatorPointsText: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DifferentiatorInnovationPoints extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_innovation_points';
  info: {
    displayName: 'innovationPoints';
    icon: 'bulletList';
  };
  attributes: {
    pointDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    pointTitles: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DifferentiatorPointDescription extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_point_descriptions';
  info: {
    displayName: 'pointDescription';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface DifferentiatorPointTitle extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_point_titles';
  info: {
    displayName: 'pointTitle';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface DifferentiatorTechnologyItems extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_technology_items';
  info: {
    displayName: 'technologyItems';
    icon: 'bulletList';
  };
  attributes: {
    techItemColor: Schema.Attribute.String;
    techItemdescription: Schema.Attribute.Text & Schema.Attribute.Required;
    techItemIconName: Schema.Attribute.String;
    techItemIconTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DifferentiatorTestimonialsList extends Struct.ComponentSchema {
  collectionName: 'components_differentiator_testimonials_lists';
  info: {
    displayName: 'testimonialsList';
    icon: 'bulletList';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    authorPosition: Schema.Attribute.String & Schema.Attribute.Required;
    quoteText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'crowd-sourcing-page.benefits': CrowdSourcingPageBenefits;
      'crowd-sourcing-page.case-studies': CrowdSourcingPageCaseStudies;
      'crowd-sourcing-page.faqs': CrowdSourcingPageFaqs;
      'crowd-sourcing-page.metrics': CrowdSourcingPageMetrics;
      'crowd-sourcing-page.model-benefits': CrowdSourcingPageModelBenefits;
      'crowd-sourcing-page.overview-crowd-sourcing': CrowdSourcingPageOverviewCrowdSourcing;
      'crowd-sourcing-page.overview-traditional-security': CrowdSourcingPageOverviewTraditionalSecurity;
      'crowd-sourcing-page.steps': CrowdSourcingPageSteps;
      'crowd-sourcing-page.testimonials': CrowdSourcingPageTestimonials;
      'differentiator.differentiator': DifferentiatorDifferentiator;
      'differentiator.differentiator-points': DifferentiatorDifferentiatorPoints;
      'differentiator.innovation-points': DifferentiatorInnovationPoints;
      'differentiator.point-description': DifferentiatorPointDescription;
      'differentiator.point-title': DifferentiatorPointTitle;
      'differentiator.technology-items': DifferentiatorTechnologyItems;
      'differentiator.testimonials-list': DifferentiatorTestimonialsList;
    }
  }
}
