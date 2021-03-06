import { Injectable } from '@angular/core';
import { startCase as _startCase, camelCase as _camelCase, kebabCase as _kebabCase } from 'lodash';
import { SimpleData, StringTransformMethods, stringTransformMethodsConstants, StringTransformMethodsConstants } from '../_types/data.types';
import { v4 } from 'uuid';

@Injectable() export class ToolService {
  public months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public stringTransformTypes: StringTransformMethodsConstants;

  constructor() {
    this.stringTransformTypes = stringTransformMethodsConstants;
  }

  public static getValueFromMultiLevelObject(object: any, key: string, separator?: string): any {
    const _separator = separator || '.';
    if (object[key] !== undefined) {
      return object[key];
    }
    try {
      return key.split(_separator).reduce((obj: any, index: any) => {
        return obj[index];
      }, object);
    } catch (e) {
      if (e instanceof TypeError) {
        return undefined;
      } else {
        throw e;
      }
    }
  }

  public static setValueInMultiLevelObject(object: any, key: string, value: any, separator?: string): any {
    const _separator: string = separator || '.';
    return  key.split(_separator).reduce((o: any, i: string) => {
      if (o && typeof o[i] === 'object') {
        return o[i];
      }
      if (o && i in o) {
        o[i] = value;
        return o;
      }
    }, object);
  }

  public static waitFor(milliseconds: number): void {
    const _now: number = Date.now();
    let _timeOut: boolean = false;
    do {
      _timeOut = (Date.now() - _now >= milliseconds);
    } while (!_timeOut);
  }

  /**
   * repeatedValuesInArray
   * @description
   * This method returns an array of uniques values if parameter "unique" is true; or returns
   * an array of ONLY repeated values (unique values are discarded) if unique is false.
   * Default value por parameter unique is true.
   */
  public static repeatedValuesInArray(values: Array<SimpleData>, unique?: boolean): Array<SimpleData> {
    const _unique: boolean = (unique === undefined) ? true : unique;
    return (_unique) ? Array.from(new Set(values)) : values.filter((e: SimpleData, i: number) => values.indexOf(e) !== i);
  }

  public static checkLastChar(text: string, char: string): string {
    if (text && text[text.length - 1] !== char) {
      return `${text}${char}`;
    }
    return text;
  }

  public static hexToRgb(hex: string): Array<number> {
    const _output: Array<string> = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m: string, r: string, g: string, b: string) => '#' + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g);
    return _output.map((e: string) => parseInt(e, 16));
  }

  public static rgbToHex(r: number, g: number, b: number): string {
    const _output: Array<string> = [r, g, b].map((e: number) => {
      const _hex: string = e.toString(16);
      return (_hex.length === 1) ? `0${_hex}` : _hex;
    });
    return _output.join('');
  }

  /**
   * generateUuid
   * @description
   * Generates a new uuid using uuid dependency.
   */
  public static generateUuid(): string {
    return v4();
  }

  /**
   * checkArray
   * @description
   * Returns true if parameter given "array" is an array, otherwise returns false;
   * If optional parameter "filled" is given, then this method checks the array is not empty.
   * Default value for "filled" is true.
   */
  public static checkArray(array: Array<any>, filled: boolean = true): boolean {
    const _checkStructure: boolean = (!!array && Array.isArray(array));
    if (filled) {
      return (_checkStructure && !!array.length);
    }
    return _checkStructure;
  }

  /**
   * @deprecated
   */
  public static getValueFromDotedKey(object: any, dotedKey: string, separator?: string): any {
    const _separator = separator || '.';

    if (object[dotedKey] !== undefined) {
      return object[dotedKey];
    }
    try {
      return dotedKey.split(_separator).reduce((obj, index) => {
        return obj[index];
      }, object);
    } catch (e) {
      if (e instanceof TypeError) {
        return undefined;
      } else {
        throw e;
      }
    }
  }

  /**
   * @deprecated
   */
  public static formatString(text: string): string {
    if (isNaN(Number(text))) {
      return _startCase(text);
    } else {
      return text;
    }
  }

  public identifier(index: number, item: any): any {
    let _output: any = (typeof item === 'string') ? item : index;
    ['code', 'id', 'param', 'key'].forEach((e: string) => {
      if (item.hasOwnProperty(e)) {
        _output = item[e];
        return;
      }
    });
    return _output;
  }

  public stringTransform(text: string, transformType?: StringTransformMethods): string {
    const _transformType: StringTransformMethods = transformType || this.stringTransformTypes.START;
    let _output: string = text;
    if (isNaN(Number(text))) {
      switch (_transformType) {
        case this.stringTransformTypes.START:
          _output = _startCase(text);
          break;
        case this.stringTransformTypes.CAMEL:
          _output = _camelCase(text);
          break;
        case this.stringTransformTypes.KEBAB:
          _output = _kebabCase(text);
          break;
      }
    }
    return _output;
  }
}
