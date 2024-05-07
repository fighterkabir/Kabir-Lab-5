// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber() tests:

//true
test('phone number without parentheses', () => {

  expect(isPhoneNumber("425-876-8667")).toBe(true);
});

//true
test('phone number with parentheses', () => {

  expect(isPhoneNumber("(425)-876-8667")).toBe(true);
});

//false
test('phone number withinvalid number of numbers', () => {

  expect(isPhoneNumber("425")).toBe(false);
});

//false
test('phone number invalid characters', () => {

  expect(isPhoneNumber("@12&(")).toBe(false);
});

// tests for isEmail():

//true
test('valid email', () => {

  expect(isEmail("kshergill336@gmail.com")).toBe(true);
});

//true
test('valid email 2', () => {

  expect(isEmail("aaa@d.com")).toBe(true);
});

//false
test('invalid top-level domain', () => {

  expect(isEmail("matt2077@hotmail.comm")).toBe(false);
});

//false
test('invalid \'@\'', () => {

  expect(isEmail("matt2077#hotmail.comm")).toBe(false);
});

// isStrongPassword tests:

//true
test('strong password test:', () => {

  expect(isStrongPassword("yay_5")).toBe(true);
});

//true
test('strong password test 2:', () => {

  expect(isStrongPassword("K888")).toBe(true);
});

//false
test('invalid character', () => {

  expect(isStrongPassword("i_love_ten_hag!")).toBe(false);
});

//false
test('invalid length', () => {

  expect(isStrongPassword("i_love_ten_hag_don't_sack_him_please")).toBe(false);
});

// isDate() tests:

//true
test('valid date:', () => {

  expect(isDate("09/05/2003")).toBe(true);
});

//true
test('valid date with single digits:', () => {

  expect(isDate("9/5/2003")).toBe(true);
});

//false
test('backwards date:', () => {

  expect(isDate("2003/09/05")).toBe(false);
});

//false
test('wrong num digits:', () => {

  expect(isDate("09/05/03")).toBe(false);
});

// isHexColor() tests:

//true
test('vaild hex color (3 chars):', () => {

  expect(isHexColor("#567")).toBe(true);
});

//true 
test('vaild hex color (6 chars):', () => {

  expect(isHexColor("#234567")).toBe(true);
});

//false
test('invaild hex color (2 chars):', () => {

  expect(isHexColor("56")).toBe(false);
});

//false
test('invaild hex color (5 chars):', () => {

  expect(isHexColor("56789")).toBe(false);
});

