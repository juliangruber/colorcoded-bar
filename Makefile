
test:
	@node_modules/.bin/tape test*

example:
	@node_modules/.bin/beefy example.js

.PHONY: test

