brain-games:
	node bin/brain-games.js

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	../../node_modules/.bin/eslint .
