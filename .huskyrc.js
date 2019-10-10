const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'echo "开始啦"',
      'npm run lint',
      'npm run test',
      'npm run build',
      'git add -A'
    ])
  }
}
