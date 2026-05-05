// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('checks whether a normal phone number is valid', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('checks whether a phone number with dashes and brackets for area code is valid', () => {
    expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('ensures that phone number only has digits', () => {
    expect(isPhoneNumber('111-111-111a')).toBe(false);
});

test('ensures that special characters in phone number are not allowed', () => {
    expect(isPhoneNumber('111-111-111@')).toBe(false);
});

// isEmail
test('checks whether a valid email(mine) is valid', () => {
    expect(isEmail('prs12345678910@ucsd.edu')).toBe(true);
});

test('checks whether an email with underscores is valid', () => {
    expect(isEmail('hello_world@gmail.com')).toBe(true);
});

test('ensures whether an email missing @ is invalid', () => {
    expect(isEmail('prakharucsd.edu')).toBe(false);
});

test('ensures whether an email missing domain is invalid', () => {
    expect(isEmail('prakhar@')).toBe(false);
});

// isStrongPassword
test('checks whether a valid password starting with letter and has sufficient length is valid', () => {
    expect(isStrongPassword('hello123')).toBe(true);
});

test('checks whether a password with underscores is valid', () => {
    expect(isStrongPassword('abc_defg1234')).toBe(true);
});

test('ensures that password too short is invalid', () => {
    expect(isStrongPassword('a12')).toBe(false);
});

test('ensures that password too long is invalid', () => {
    expect(isStrongPassword('abcdefghijklmnopqrstuvwxyz123')).toBe(false);
});

// isDate
test('checks whether a date with two-digit month and day is valid', () => {
    expect(isDate('01/01/2020')).toBe(true);
});

test('checks whether a date with one-digit month and day is valid', () => {
    expect(isDate('1/1/2000')).toBe(true);
});

test('ensures that date with letters is invalid', () => {
    expect(isDate('18th June 2023')).toBe(false);
});

test('ensures that date with two digit year is invalid', () => {
    expect(isDate('12/25/23')).toBe(false);
});

// isHexColor
test('checks whether a valid 6-digit hex color with hash is valid', () => {
    expect(isHexColor('#ff5733')).toBe(true);
});

test('checks whether a valid 3-digit hex color without hash is valid', () => {
    expect(isHexColor('fff')).toBe(true);
});

test('ensures that hex color with invalid characters is invalid', () => {
    expect(isHexColor('#gggggg')).toBe(false);
});

test('ensures that hex color with wrong length is invalid', () => {
    expect(isHexColor('#1234567')).toBe(false);
});
