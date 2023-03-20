import ErrorRepository from '../app';

const errorBase = new ErrorRepository();

test('should add new errors', () => {
  errorBase.addError(404, 'Not found');
  expect(errorBase.translate(404)).toBe('Not found');
});

it('should return "Unknown error" for unknown codes', () => {
  expect(errorBase.translate(999)).toBe('Unknown error');
});

it('should allow overwriting of existing error messages', () => {
  errorBase.addError(500, 'Internal server error');
  errorBase.addError(500, 'Server error');
  expect(errorBase.translate(500)).toBe('Server error');
});
