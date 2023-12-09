import { ParamSchema, Location } from 'express-validator';

export const VALIDATION_STRING = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
});

export const VALIDATION_STRING_OPTIONAL = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: false,
});

export const VALIDATION_NUMBER = (where: Location): ParamSchema => ({
  in: [where],
  isNumeric: true,
  notEmpty: true,
});

export const VALIDATION_BOOLEAN = (where: Location): ParamSchema => ({
  in: [where],
  isBoolean: true,
  notEmpty: true,
});

export const VALIDATION_NON_EMPTY_ARRAY = (where: Location): ParamSchema => ({
  in: [where],
  isArray: true,
  notEmpty: true,
});
