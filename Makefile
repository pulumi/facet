.PHONY: clean
clean:
	rm -rf dist node_modules

.PHONY: ensure
ensure:
	yarn

.PHONY: serve
serve:
	yarn run concurrently 'yarn dev' 'yarn storybook' --raw --kill-others

.PHONY: build
build:
	./scripts/build.sh

.PHONY: change
change:
	yarn run beachball change

.PHONY: publish
publish: build
	./scripts/publish.sh
