module.exports = [{
  name: "onFunctionError",
  type: "functionError",
  code: `
$log[Error!\nFunction: $handleError[function],\nCommand: $handleError[command],\nError message: $handleError[error]]`
}];