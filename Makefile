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

.PHONY: test
test:
	./scripts/test.sh

.PHONY: lint
lint:
	./scripts/lint.sh

.PHONY: format
format:
	./scripts/format.sh

.PHONY: component
component:
	./scripts/generate.sh component

.PHONY: deploy
deploy:
	./scripts/deploy.sh

.PHONY: changelog
changelog:
	yarn run beachball change

.PHONY: publish
publish:
	./scripts/publish.sh
