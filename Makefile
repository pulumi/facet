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
	yarn run build

.PHONY: publish
publish:
	./scripts/publish.sh
