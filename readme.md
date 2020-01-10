# shakti-node

Run [Shakti](https://shakti.com/) code and get the results inside node.

[![CircleCI](https://circleci.com/gh/quicktick/shakti-node/tree/master.svg?style=svg)](https://circleci.com/gh/quicktick/shakti-node/tree/master)


```
runShakti('result: 1 2 3')
# [1,2,3]
```

Assign your output to a variable `result` in your shakti code.

Any shakti errors are thrown in node

## Usage

Import it:

```
const { runShakti } = require('shakti-node')
// or
import {runShakti} from 'shakti-node'
```

and then:

```
runShakti('result: 1 2 3')
# [1,2,3]
```

```
runShaktiFromFile('./myFile.k')
```

```
runShaktiCommand('result: 1 2 3')
# {stderror: '', stdout: '', code: 1}
```

```
runShakti('`hello + 1')
# throws type error
```

