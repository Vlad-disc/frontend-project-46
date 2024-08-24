publish: 
	npm publish --dry-run

lint:
	npx eslint .

fix: 
	npx eslint --fix .

gendiff -h:
	node bin/gendiff.js

test:
	npm test

test-coverage:   	
	npm test -- --coverage --coverageProvider=v8