module.exports = {
  'src/**/*.{css,scss}': ['prettier --write', 'git add'],
  'src/**/*.{js,jsx,ts,tsx,json}': [
    'eslint --fix',
    'prettier --write',
    'git add',
  ],
  '*.{json,md}': ['prettier --write', 'git add'],
}
