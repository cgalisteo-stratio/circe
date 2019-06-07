export interface TableConfig {
  title: string;
  tableData: Array<DataConfig>;
  showHeader?: boolean;
  headerStyle?: string;
  dropdownRow?: DropdownRowConfig;
  selection?: SelectionObject;
}

export interface DataConfig {
  id?: string | number;
  label: string;
  param: string;
  icon?: string;
  type?: 'radio' | 'select' | 'iconAction';
  specialBehavior?: RadioButtonRow;
  selectOptions?: SelectOptions;
  colorLabel?: boolean;
  colorLabelParam?: string;
  colorLabelMap?: any;
  iconAction?: IconActionObject;
  selection?: string;
  rounded?: boolean;
  noOrder?: boolean;
  noHeadLabel?: boolean;
  orderDesc?: boolean;
  showOrderArrow?: boolean;
  widthColumn: number;
  isComplexArray?: IsComplexArrayObject;
  toShowCondition?: IfRowData | IfSelection | IfCustomCondition;
}

export interface RadioButtonRow {
  type: 'radio';
  uncheckSelection: boolean;
}

export interface IfRowData {
  name: 'rowDataSimple';
  param: string;
  value: string | number | boolean;
  isDifferent?: boolean;
  ifNoShow?: IfNoShow;
}

export interface IfSelection {
  name: 'selection';
  status: boolean;
  ifNoShow?: IfNoShow;
}

export interface IfCustomCondition {
  name: 'customCondition';
  condition: (a: any) => boolean;
  ifNoShow?: IfNoShow;
}

export interface IfNoShow {
  phrase: string;
  icon?: boolean;
}

export interface IsComplexArrayObject {
  complexParam: string;
}

export interface IconActionObject {
  type: IconAction;
  icon: string;
  iconClass?: string;
  size?: 'mda-fs__14' | 'mda-fs__15' | 'mda-fs__16' | 'mda-fs__18';
}
export type IconAction = 'edit' | 'delete';
export interface IconActionEvent {
  type: IconAction;
  element: any;
}

export interface SelectOptions {
  selectKeyIdentification: string;
  fieldsForEvent: Array<string>;
  value: string;
  defaultValue: string;
  options: string;
}

export interface DropdownRowConfig {
  caption: string;
  param: string;
  content?: Array<DropdownRowContent>;
  exclusionParams?: Array<string>;
}

export interface DropdownRowContent {
  label: string;
  param: string;
  rounded?: boolean;
}

export interface SelectionObject {
  fieldToCompare: string;
  selectAll?: boolean;
  fieldToSelect?: string;
  disableOnUncheck?: boolean;
  uncheckRadio?: boolean;
  uncheckRadioId?: string;
}

export interface WithAddsObject {
  dropdown: number;
  selection: number;
}
