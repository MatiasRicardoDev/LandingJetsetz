import { describe, expect, it } from 'vitest';

import { isKeyExpired } from './saveOnBrowser';

//@ts-ignore
global.localStorage = {
  state: {},
  setItem(key, item) {
    this.state[key] = item;
  },
  getItem(key) {
    return this.state[key];
  },
  removeItem(key) {
    this.state[key] = null;
  }
};

describe('saveOnBrowser', () => {
  it('returns true if the stored date is empty', () => {
    // Arrange
    const key = 'selectedItems-age';
    global.localStorage.setItem(key, '');

    // Act
    const result = isKeyExpired();

    // Assert
    expect(result).toBe(true);
  });

  it('returns true if the stored date is older than 60 minutes', () => {
    // Arrange
    const key = 'selectedItems-age';
    const oldDate = new Date();
    oldDate.setMinutes(oldDate.getMinutes() - 61);
    global.localStorage.setItem(key, oldDate.toISOString());

    // Act
    const result = isKeyExpired();

    // Assert
    expect(result).toBe(true);
    expect(global.localStorage.getItem('selectedItems')).toBeNull();
    expect(global.localStorage.getItem('selectedItems-age')).toBeNull();
  });

  it('returns false if the stored date is less than 60 minutes old', () => {
    // Arrange
    const key = 'selectedItems-age';
    const now = new Date();
    global.localStorage.setItem(key, now.toISOString());

    // Act
    const result = isKeyExpired();

    // Assert
    expect(result).toBe(false);
  });
});
