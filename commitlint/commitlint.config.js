module.exports = {
  extends: ['@commitlint/config-conventional'],
  defaultIgnores: true,
  plugins: [
    {
      rules: {
        'subject-lowercase-with-env-exception': (parsed) => {
          const { subject } = parsed;
          if (!subject) return [true];
          // regex to find env vars like $var or ${var}
          const envVarRegex = /\$[A-Z_0-9]+|\$\{[A-Z_0-9]+\}/g;
          // remove the env vars from the string to evaluate only the text
          const cleanedSubject = subject.replace(envVarRegex, '');
          // check if the remaining text is completely lowercase (ignores numbers, spaces, and punctuation)
          const isLowercase = cleanedSubject === cleanedSubject.toLowerCase();
          return [
            isLowercase,
            `Subject must be lowercase. Uppercase is only allowed for environment variables.`
          ];
        },
      },
    },
  ],
  rules: {
    // Disable the native rule so it doesn't conflict
    'subject-case':[0],
    'subject-lowercase-with-env-exception': [2, 'always'],
    "header-max-length": [2, "always", 80],
    "type-case": [2, "always", ["lower-case"]],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]],
  },
};
