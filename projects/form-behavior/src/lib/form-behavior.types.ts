import {SimpleData} from '@lunaeme/circe-core';

export type FormBehaviorTargetElement = HTMLInputElement | HTMLSelectElement;

export interface ElementRules {
  [tag: string]: Rule;
}
export interface Rule {
  main: string;
  sizes: Array<string>;
  placeholder?: PlaceholderRule;
  label: LabelRule;
  wrappers: WrapperRule;
  action?: ActionRule;
  report?: ReportRule;
}
export interface PlaceholderRule {
  class: string;
  value: SimpleData;
}
export interface LabelRule {
  tag: string;
  main: string;
  sizes: LabelSizes;
  forceToSmall?: Array<string>;
  forceToDisabled?: Array<string>;
}
export interface LabelSizes {
  small: string;
}
export interface WrapperRule {
  tags: Array<string>;
  classes: Array<string>;
}
export interface ActionRule {
  classes: Array<string>;
}
export interface ReportRule {
  tags: Array<string>;
  main: string;
  classes: Array<string>;
}

export type LabelForceType = 'forceToSmall' | 'forceToDisabled';
export type AssociateElementType = 'label' | 'wrapper' | 'report';
export type ClassAction = 'add' | 'remove';
export type ClassEvent = 'disabled' | 'error' | 'focus' | 'action';

/**
 * @description
 * Model constant. Label force action types:
 */

export const FORCE_TO_SMALL: LabelForceType = 'forceToSmall';
export const FORCE_TO_DISABLED: LabelForceType = 'forceToDisabled';

/**
 * @description
 * Model constants. Types of associate elements:
 */

export const LABEL: AssociateElementType = 'label';
export const WRAPPER: AssociateElementType = 'wrapper';
export const REPORT: AssociateElementType = 'report';

/**
 * @description
 * Model constants. Classes for dom events:
 */

export const ADD: ClassAction = 'add';
export const REMOVE: ClassAction = 'remove';

/**
 * @description
 * Model constants. Element event classes:
 */

export const DISABLED: ClassEvent = 'disabled';
export const ERROR: ClassEvent = 'error';
export const FOCUSED: ClassEvent = 'focus';
export const ACTION: ClassEvent = 'action';

/**
 * @description
 * Model constant. Definition array of element statuses.
 */
export const elementStatuses: Array<ClassEvent> = [FOCUSED, ERROR, DISABLED, ACTION];

/**
 * @description
 * Model constant. Object that defines common label element and its rules.
 */
const labelCommon: LabelRule = {
  tag: 'LABEL',
  main: 'mda-label',
  sizes: {
    small: 'mda-label--small'
  }
};

const reportCommon: ReportRule = {
  tags: ['SPAN', 'DIV'],
  main: 'mda-report',
  classes: ['mda-report']
};

/**
 * @description
 * Model constant. Object that defines elements form behavior rules.
 */
export const elementRules: ElementRules = {
  INPUT: {
    main: 'mda-input',
    sizes: ['mda-input--small'],
    label: labelCommon,
    wrappers: {
      tags: ['SPAN', 'DIV'],
      classes: ['mda-input--search', 'mda-input--email', 'mda-input--user', 'mda-input--password', 'mda-input--action-clear']
    },
    action: {
      classes: ['mda-input--action-clear']
    },
    report: reportCommon
  },
  TEXTAREA: {
    main: 'mda-textarea',
    sizes: [],
    label: labelCommon,
    wrappers: {
      tags: [],
      classes: []
    },
    report: reportCommon
  },
  SELECT: {
    main: 'mda-select',
    sizes: ['mda-select--small'],
    placeholder: {
      class: 'mda-select--placeholder',
      value: ''
    },
    label: {
      ...labelCommon,
      forceToDisabled: ['mda-select--filter']
    },
    wrappers: {
      tags: ['SPAN', 'DIV'],
      classes: ['mda-select']
    },
    report: reportCommon
  }
};
