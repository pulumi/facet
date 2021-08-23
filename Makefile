.PHONY: clean
clean:
	rm -rf dist node_modules

.PHONY: ensure
ensure:
	yarn

.PHONY: serve
serve:
	yarn run dev

.PHONY: build
build:
	yarn run build

.PHONY: publish
publish:
	./scripts/publish.sh
