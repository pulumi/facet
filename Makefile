.PHONY: clean
clean:
	rm -rf dist node_modules

.PHONY: ensure
ensure:
	yarn

.PHONY: serve
serve:
	./scripts/serve.sh

.PHONY: build
build:
	./scripts/build.sh

.PHONY: change
change:
	yarn run beachball change

.PHONY: publish
publish:
	./scripts/publish.sh
