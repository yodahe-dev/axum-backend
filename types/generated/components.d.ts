import type { Schema, Struct } from '@strapi/strapi';

export interface ApiPentestingApi extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_api_s';
  info: {
    displayName: 'API ';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPentestingApilist extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_apilists';
  info: {
    displayName: 'Apilist';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPentestingBenefits extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPentestingFeature extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPentestingIcon extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {};
}

export interface ApiPentestingIconCard extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_icon_cards';
  info: {
    displayName: 'icon-card';
  };
  attributes: {
    riskLevel: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPentestingTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rate: Schema.Attribute.BigInteger &
      Schema.Attribute.SetMinMax<
        {
          max: '5';
          min: '1';
        },
        string
      >;
    themWork: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPentestingVulnerabilityItem extends Struct.ComponentSchema {
  collectionName: 'components_api_pentesting_vulnerability_items';
  info: {
    displayName: 'vulnerability-item';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttacksurfaceAttackFeatures extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_attack_features';
  info: {
    displayName: 'attackFeatures';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'activity'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttacksurfaceAttackSteps extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_attack_steps';
  info: {
    displayName: 'attackSteps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'activity'>;
    stepNumber: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttacksurfaceBenefitCards extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_benefit_cards';
  info: {
    displayName: 'benefitCards';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'shield'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttacksurfaceButton extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'eye'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Manage Your Attack Surface'>;
    url: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/attacksurface'>;
  };
}

export interface AttacksurfaceControlFeatures extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_control_features';
  info: {
    displayName: 'controlFeatures';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttacksurfaceControlSteps extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_control_steps';
  info: {
    displayName: 'controlSteps';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cpu'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttacksurfaceCtaButtons extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_cta_buttons';
  info: {
    displayName: 'ctaButtons';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'calendar'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/contact'>;
  };
}

export interface AttacksurfaceSecondaryButton extends Struct.ComponentSchema {
  collectionName: 'components_attacksurface_secondary_buttons';
  info: {
    displayName: 'secondaryButton';
  };
  attributes: {
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'calendar'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Request Free Assessment'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/request-assessment'>;
  };
}

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

export interface CybersecurityAwarenessTrainingBenefitsList
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_benefits_lists';
  info: {
    displayName: 'benefitsList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CybersecurityAwarenessTrainingBtns
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_btns';
  info: {
    displayName: 'btns';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CybersecurityAwarenessTrainingCourseOfferings
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_course_offerings';
  info: {
    displayName: 'CourseOfferings';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CybersecurityAwarenessTrainingCtaBtn
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_cta_btns';
  info: {
    displayName: 'ctaBtn';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface CybersecurityAwarenessTrainingFeaturetab1
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_featuretab1s';
  info: {
    displayName: 'featuretab1';
  };
  attributes: {
    list: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CybersecurityAwarenessTrainingHeroButton
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_hero_buttons';
  info: {
    displayName: 'HeroButton';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String;
  };
}

export interface CybersecurityAwarenessTrainingOnlineTraining
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_online_trainings';
  info: {
    displayName: 'onlineTraining';
  };
  attributes: {
    CourseOfferings: Schema.Attribute.Component<
      'cybersecurity-awareness-training.course-offerings',
      true
    >;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    featuretab1: Schema.Attribute.Component<
      'cybersecurity-awareness-training.featuretab1',
      true
    >;
    TabsNumber: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMax<
        {
          max: '3';
          min: '1';
        },
        string
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CybersecurityAwarenessTrainingTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_awareness_training_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    Tabs: Schema.Attribute.Component<
      'cybersecurity-awareness-training.online-training',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 3;
        },
        number
      >;
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

export interface IntroductionBenefits extends Struct.ComponentSchema {
  collectionName: 'components_introduction_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntroductionIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_introduction_introductions';
  info: {
    displayName: 'Introduction';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    iconName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ShieldCheck '>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Why Partner With AXUM SEC?'>;
  };
}

export interface IntroductionPartnersCard extends Struct.ComponentSchema {
  collectionName: 'components_introduction_partners_cards';
  info: {
    displayName: 'PartnersCard';
  };
  attributes: {
    Contribution: Schema.Attribute.Text & Schema.Attribute.Required;
    PartnersCardsubtitle: Schema.Attribute.String;
    PartnersCardTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Profileimage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface IntroductionStrategy extends Struct.ComponentSchema {
  collectionName: 'components_introduction_strategies';
  info: {
    displayName: 'Strategy';
    icon: 'bulletList';
  };
  attributes: {
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    Strategylist: Schema.Attribute.Component<'introduction.strategylist', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntroductionStrategylist extends Struct.ComponentSchema {
  collectionName: 'components_introduction_strategylists';
  info: {
    displayName: 'Strategylist';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'api-pentesting.api': ApiPentestingApi;
      'api-pentesting.apilist': ApiPentestingApilist;
      'api-pentesting.benefits': ApiPentestingBenefits;
      'api-pentesting.feature': ApiPentestingFeature;
      'api-pentesting.icon': ApiPentestingIcon;
      'api-pentesting.icon-card': ApiPentestingIconCard;
      'api-pentesting.testimonial': ApiPentestingTestimonial;
      'api-pentesting.vulnerability-item': ApiPentestingVulnerabilityItem;
      'attacksurface.attack-features': AttacksurfaceAttackFeatures;
      'attacksurface.attack-steps': AttacksurfaceAttackSteps;
      'attacksurface.benefit-cards': AttacksurfaceBenefitCards;
      'attacksurface.button': AttacksurfaceButton;
      'attacksurface.control-features': AttacksurfaceControlFeatures;
      'attacksurface.control-steps': AttacksurfaceControlSteps;
      'attacksurface.cta-buttons': AttacksurfaceCtaButtons;
      'attacksurface.secondary-button': AttacksurfaceSecondaryButton;
      'crowd-sourcing-page.benefits': CrowdSourcingPageBenefits;
      'crowd-sourcing-page.case-studies': CrowdSourcingPageCaseStudies;
      'crowd-sourcing-page.faqs': CrowdSourcingPageFaqs;
      'crowd-sourcing-page.metrics': CrowdSourcingPageMetrics;
      'crowd-sourcing-page.model-benefits': CrowdSourcingPageModelBenefits;
      'crowd-sourcing-page.overview-crowd-sourcing': CrowdSourcingPageOverviewCrowdSourcing;
      'crowd-sourcing-page.overview-traditional-security': CrowdSourcingPageOverviewTraditionalSecurity;
      'crowd-sourcing-page.steps': CrowdSourcingPageSteps;
      'crowd-sourcing-page.testimonials': CrowdSourcingPageTestimonials;
      'cybersecurity-awareness-training.benefits-list': CybersecurityAwarenessTrainingBenefitsList;
      'cybersecurity-awareness-training.btns': CybersecurityAwarenessTrainingBtns;
      'cybersecurity-awareness-training.course-offerings': CybersecurityAwarenessTrainingCourseOfferings;
      'cybersecurity-awareness-training.cta-btn': CybersecurityAwarenessTrainingCtaBtn;
      'cybersecurity-awareness-training.featuretab1': CybersecurityAwarenessTrainingFeaturetab1;
      'cybersecurity-awareness-training.hero-button': CybersecurityAwarenessTrainingHeroButton;
      'cybersecurity-awareness-training.online-training': CybersecurityAwarenessTrainingOnlineTraining;
      'cybersecurity-awareness-training.tabs': CybersecurityAwarenessTrainingTabs;
      'differentiator.differentiator': DifferentiatorDifferentiator;
      'differentiator.differentiator-points': DifferentiatorDifferentiatorPoints;
      'differentiator.innovation-points': DifferentiatorInnovationPoints;
      'differentiator.point-description': DifferentiatorPointDescription;
      'differentiator.point-title': DifferentiatorPointTitle;
      'differentiator.technology-items': DifferentiatorTechnologyItems;
      'differentiator.testimonials-list': DifferentiatorTestimonialsList;
      'introduction.benefits': IntroductionBenefits;
      'introduction.introduction': IntroductionIntroduction;
      'introduction.partners-card': IntroductionPartnersCard;
      'introduction.strategy': IntroductionStrategy;
      'introduction.strategylist': IntroductionStrategylist;
    }
  }
}
