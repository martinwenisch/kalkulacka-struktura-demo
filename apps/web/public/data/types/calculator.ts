/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Calculator is a set of questions, candidates and their answers
 */
export type Calculator = Calculator1 & Calculator2;
/**
 * Unique identifier of a calculator in the format of UUID
 */
export type ID = string;
/**
 * Time of the creation of a calculator in the ISO 8601 format
 */
export type CreatedAt = string;
/**
 * Time of the last update of a calculator in the ISO 8601 format
 */
export type UpdatedAt = string;
/**
 * Time when a calculator should be published in the ISO 8601 format
 */
export type PublishedAt = string;
/**
 * Title of a calculator
 */
export type Title = string;
/**
 * Short title of a calculator with a maximum of 25 characters
 */
export type ShortTitle = string;
/**
 * Description of a calculator
 */
export type Description = string;
/**
 * Intro text displayed before starting the calculator
 */
export type Intro = string;
/**
 * Ordered list of tags
 *
 * @minItems 1
 */
export type Tags = [Tag, ...Tag[]];
/**
 * Tag with max. 25 characters
 */
export type Tag = string;
export type Calculator2 =
  /*  | StandaloneCalculator*/
  /*  | */ CalculatorFromAGroup;
/*  | CalculatorFromAnElection*/
/**
 * Human-friendly unique key of a standalone calculator in the hyphen-separated lowercased format
 */
export type Key = string;
/**
 * Unique identifier of a calculator group in the format of UUID
 */
export type ID1 = string;
/**
 * Human-friendly unique key of a calculator group in the hyphen-separated lowercased format
 */
export type Key1 = string;
/**
 * Human-friendly unique key of a variant in the hyphen-separated lowercased format
 */
export type Key2 = string;
/**
 * Calculator that is part of an election
 */
export type CalculatorFromAnElection = {
  [k: string]: unknown;
};

export interface Calculator1 {
  id: ID;
  createdAt: CreatedAt;
  updatedAt?: UpdatedAt;
  publishedAt?: PublishedAt;
  title?: Title;
  shortTitle?: ShortTitle;
  description?: Description;
  intro?: Intro;
  tags?: Tags;
  [k: string]: unknown;
}
/**
 * Standalone calculator is a calculator that is not part of a calculator group
 */
export interface StandaloneCalculator {
  key: Key;
  [k: string]: unknown;
}
/**
 * Calculator that is part of a calculator group
 */
export interface CalculatorFromAGroup {
  calculatorGroup: CalculatorGroup;
  variant: Variant;
  [k: string]: unknown;
}
/**
 * Reference to a calculator group the calculator belongs to
 */
export interface CalculatorGroup {
  id: ID1;
  key: Key1;
  [k: string]: unknown;
}
export interface Variant {
  key: Key2;
  [k: string]: unknown;
}
