// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Phone number
  test('valid standard format', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('valid with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('invalid: letters included', () => {
    expect(isPhoneNumber('123-ABC-4567')).toBe(false);
  });
  test('invalid: too short', () => {
    expect(isPhoneNumber('123-456-789')).toBe(false);
  });

// Email
test('returns true for a standard email', () => {
    expect(isEmail('happy@gmail.com')).toBe(true);
  });
  test('returns true for an email with underscores', () => {
    expect(isEmail('test_user@gmail.com')).toBe(true);
  });
  test('returns false for an email missing the @ symbol', () => {
    expect(isEmail('happy.gmail.com')).toBe(false);
  });
  test('returns false for an email with a long TLD', () => {
    expect(isEmail('test@website.online')).toBe(false);
  });

// Strong Password
test('returns true for a valid 8-character password', () => {
    expect(isStrongPassword('a123_456')).toBe(true);
  });
  test('returns true for the minimum 4-character password', () => {
    expect(isStrongPassword('abcd')).toBe(true);
  });
  test('returns false for a password starting with a number', () => {
    expect(isStrongPassword('1abc')).toBe(false);
  });
  test('returns false for a password that is too short', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });

  // Date
  test('returns true for a standard date', () => {
    expect(isDate('05/04/2026')).toBe(true);
  });
  test('returns true for single digit month and day', () => {
    expect(isDate('1/1/2026')).toBe(true);
  });
  test('returns false for a 2-digit year', () => {
    expect(isDate('05/04/26')).toBe(false);
  });
  test('returns false for non-slash separators', () => {
    expect(isDate('05-04-2026')).toBe(false);
  });

  // Hex Color
  test('returns true for a 6-character hex with #', () => {
    expect(isHexColor('#AAAAAA')).toBe(true);
  });
  test('returns true for a 3-character hex without #', () => {
    expect(isHexColor('000')).toBe(true);
  });
  test('returns false for invalid hex characters', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
  });
  test('returns false for an invalid length', () => {
    expect(isHexColor('#12345')).toBe(false);
  });