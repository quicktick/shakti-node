import assert from 'assert'
import { runShakti } from '~/index'

describe('runShakti', () => {
  describe('parseResults', () => {
    const testCases = [
      { kCode: 'result: 1', expectedResult: 1 },
      { kCode: 'result: 1.123', expectedResult: 1.123 },
      { kCode: 'result: 1 2 3', expectedResult: [1, 2, 3] },
      { kCode: `result: "hello"`, expectedResult: 'hello' },
      { kCode: 'result: `hello', expectedResult: 'hello' },
      { kCode: `result: (1;"hello")`, expectedResult: [1, 'hello'] },
      { kCode: 'result: `hello`world!(1;2)', expectedResult: { hello: 1, world: 2 } },
      { kCode: 'result: 2020-01-01T15:12:52.872', expectedResult: '2020-01-01T15:12:52.872' },
      { kCode: 'result: +(`a`b`c)!(2#1;2#2;2#3)', expectedResult: [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }] },
      { kCode: 'result: +(`a`b`c)!(2#1;2#2;2#3)', expectedResult: [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }] },
    ]
    testCases.forEach(({ kCode, expectedResult }) => {
      it(`${kCode} returns ${JSON.stringify(expectedResult)}`, () => {
        assert.deepEqual(runShakti(kCode), expectedResult)
      })
    })
  })

  describe('errors', () => {
    const testCases = [
      { kCode: '1 + `hello' },
    ]
    testCases.forEach(({ kCode, expectedResult }) => {
      it(`${kCode} throws error`, () => {
        assert.throws(() => runShakti(kCode), Error)
      })
    })
  })
})
