.PHONY: clean
clean:
	rm -rf dist

.PHONY: ensure
ensure:
	yarn

.PHONY: serve
serve:
	yarn run dev

.PHONY: build
build:
	yarn run build
