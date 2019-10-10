const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'echo "commit开始之前要做的事儿"',
      'npm run lint',
      'npm run build'
    ])
  }
}
