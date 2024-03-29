/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Location = (string | number)[];
export type Message = string;
export type ErrorType = string;
export type Detail = ValidationErrorRest[];

export interface HTTPValidationErrorRest {
  detail?: Detail;
  [k: string]: unknown;
}
export interface ValidationErrorRest {
  loc: Location;
  msg: Message;
  type: ErrorType;
  [k: string]: unknown;
}
