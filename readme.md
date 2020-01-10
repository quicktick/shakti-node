# shakti-node

Run shakti code and get the results inside node.

```
runShakti('result: 1 2 3')
# [1,2,3]
```

assign your output to a variable `result` in your shakti code.

any shakti errors are thrown in node

## Functions

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

