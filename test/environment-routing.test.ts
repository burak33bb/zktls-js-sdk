import { getBaseApi } from '../src/config/constants';

describe('environment API routing', () => {
  it('routes production to the production API', () => {
    expect(getBaseApi('production')).toBe('https://api.padolabs.org');
  });

  it('routes development to the development API', () => {
    expect(getBaseApi('development')).toBe('https://api-dev.padolabs.org');
  });

  it('routes test to the development API', () => {
    expect(getBaseApi('test')).toBe('https://api-dev.padolabs.org');
  });
});
