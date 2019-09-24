import addressService from '../src/index';

describe('test Gerneral getting of data', () => {
  addressService.loadData(null, 'json');
  test('get exactly one record from zipcode', () => {
    const result = addressService.queryByType(
      {
        zipcode: '10250'
      },
      'zipcode'
    );
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(10250);
  });

  test('get multiple records from zipcode', () => {
    addressService.loadData(null, 'json');
    const result = addressService.query({
      zipcode: '10250'
    });
    expect(result.length).toBeGreaterThanOrEqual(2);
    expect(result[0].zipcode).toBe(10250);
  });
});
