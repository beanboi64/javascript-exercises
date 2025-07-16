const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Morgan', () => {
    expect(values.firstName).toEqual('Morgan');
  });
  test('lastName is Gibbs-White', () => {
    expect(values.lastName).toEqual('Gibbs-White');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2000', () => {
    expect(values.birthYear).toEqual(2000);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Morgan Gibbs-White and I am 25 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Morgan Gibbs-White', () => {
    expect(values.fullName).toEqual('Morgan Gibbs-White');
  });
  test('age is 25', () => {
    expect(values.age).toEqual(25);
  });
});
