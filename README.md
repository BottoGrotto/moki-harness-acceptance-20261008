# Moki harness acceptance fixture

This public repository is a disposable engineering and GitHub Actions fixture for testing Moki's governed PR, CI, rerun and review workflow. It contains no ClassStack or personal data.

Run `npm test` locally. The pull-request workflow deliberately fails on its first attempt and passes when that same workflow run is rerun. This tests recovery after publication without introducing a flaky dependency.
