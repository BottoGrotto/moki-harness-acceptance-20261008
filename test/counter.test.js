import assert from 'node:assert/strict';
import { test } from 'node:test';
import { decrement, increment, reset } from '../src/counter.js';

test('increment and decrement preserve signed counts', () => {
  assert.equal(increment(-1), 0);
  assert.equal(increment(0), 1);
  assert.equal(decrement(1), 0);
  assert.equal(decrement(0), -1);
});

test('reset returns to zero', () => {
  assert.equal(reset(), 0);
});
