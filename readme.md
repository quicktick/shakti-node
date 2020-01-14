# shakti-node

Run [Shakti](https://shakti.com/) code and get the results inside node.

[![CircleCI](https://circleci.com/gh/quicktick/shakti-node/tree/master.svg?style=svg)](https://circleci.com/gh/quicktick/shakti-node/tree/master)


```js
runShakti('result: 1 2 3')
# [1,2,3]
```

Assign your output to a variable `result` in your shakti code.

Any shakti errors are thrown in node

## Usage

Import it:

```js
const { runShakti } = require('shakti-node')
// or
import {runShakti} from 'shakti-node'
```

and then:

```js
runShakti('result: 1 2 3')
# [1,2,3]
```

```js
runShaktiFromFile('./myFile.k')
```

```js
runShaktiCommand('result: 1 2 3')
# {stderror: '', stdout: '', code: 1}
```

```js
runShakti('`hello + 1')
# throws type error
```

## Common errors

#### `Error: No valid exports main found for`

You need to run your program with `--experimental-conditional-exports` flag passed to node.
