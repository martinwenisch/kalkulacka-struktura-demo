/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Group of two or more calculators
 */
export type CalculatorGroup = CalculatorGroup1 & CalculatorGroup2;
/**
 * Unique identifier of a calculator group in the format of UUID
 */
export type ID = string;
/**
 * Human-friendly unique key of a calculator group in the hyphen-separated lowercased format
 */
export type Key = string;
/**
 * Unique identifier of an election in the format of UUID
 */
export type ID1 = string;
/**
 * Human-friendly unique key of an election in the hyphen-separated lowercased format
 */
export type Key1 = string;
/**
 * @minItems 1
 */
export type OrderedListOfCalculatorVariants = [
  {
    key?: Key2;
    [k: string]: unknown;
  },
  ...{
    key?: Key2;
    [k: string]: unknown;
  }[],
];
/**
 * Human-friendly unique key of a variant in the hyphen-separated lowercased format
 */
export type Key2 = string;
/**
 * Time of the creation of a calculator group in the ISO 8601 format
 */
export type CreatedAt = string;
/**
 * Time of the last update of a calculator group in the ISO 8601 format
 */
export type UpdatedAt = string;
/**
 * Time when a calculator group should be published in the ISO 8601 format
 */
export type PublishedAt = string;
/**
 * Title of a calculator group
 */
export type Title = string;
/**
 * Short title of a calculator group with a maximum of 25 characters
 */
export type ShortTitle = string;
/**
 * Description of a calculator group
 */
export type Description = string;
export type CalculatorGroup2 =
  | {
      calculators: OrderedListOfCalculators;
      [k: string]: unknown;
    }
  | {
      calculators: OrderedListOfCalculatorsFromAnElection;
      [k: string]: unknown;
    };
/**
 * @minItems 1
 */
export type OrderedListOfCalculators = [Calculator, ...Calculator[]];
/**
 * Unique identifier of a calculator in the format of UUID
 */
export type ID2 = string;
/**
 * @minItems 1
 */
export type OrderedListOfCalculatorsFromAnElection = [
  Calculator1,
  ...Calculator1[],
];
export type Calculator1 =
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * List of calculator groups
 */
export type Answers = CalculatorGroup[];

export interface CalculatorGroup1 {
  id: ID;
  key: Key;
  election?: Election;
  variants?: OrderedListOfCalculatorVariants;
  createdAt: CreatedAt;
  updatedAt?: UpdatedAt;
  publishedAt?: PublishedAt;
  title?: Title;
  shortTitle?: ShortTitle;
  description?: Description;
  [k: string]: unknown;
}
/**
 * Reference to an election the calculator belongs to
 */
export interface Election {
  id: ID1;
  key: Key1;
  [k: string]: unknown;
}
export interface Calculator {
  id: ID2;
  variant: Variant;
  [k: string]: unknown;
}
export interface Variant {
  key: Key2;
  [k: string]: unknown;
}
