.PHONY: run-commit-workflow

run-commit-workflow:
	act workflow_dispatch \
		-s GH_PAT="$(gh auth token)" \
		-j commit \
		--container-architecture linux/amd64 \
		--input github-token="$(gh auth token)"
