# Contributing to zdharma-continuum

## Commit messages

Commit messages and pull request titles follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```text
type: subject

Optional body, separated from the first line by a blank line.
```

or, with a scope, `type(scope): subject`. For example:

```text
fix: restore compdef after loading a command plugin with atinit'!…'
docs(readme): describe atinit'!…' and its use with compdef
```

The rules:

- **type**: one of `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`, in lowercase.
- **subject**: in lowercase, without a full stop at the end. Capitals are allowed only in environment variables, such as `$ZPFX`.
- **first line**: at most 80 characters.
- **body and footer lines**: at most 100 characters each.

The rules are in [`commitlint/commitlint.config.js`](commitlint/commitlint.config.js). CI checks the title and the commit messages of every pull request with them.

## Checking commit messages before you push

To catch a broken message before CI does, install the pre-push hook in your clone:

```sh
curl -fsSL https://raw.githubusercontent.com/zdharma-continuum/.github/main/commitlint/pre-push-hook \
  -o .git/hooks/pre-push && chmod +x .git/hooks/pre-push
```

On each push, the hook downloads the current rules and refuses the push if a commit message breaks one, so you can still fix it with `git commit --amend` or `git rebase -i`. The hook needs Node.js.
