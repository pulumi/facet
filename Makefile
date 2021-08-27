.PHONY: clean
clean:
	./scripts/clean.sh

.PHONY: ensure
ensure:
	./scripts/ensure.sh

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
