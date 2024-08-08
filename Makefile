publish: 
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

gendiff -h:
	node bin/gendiff.js

