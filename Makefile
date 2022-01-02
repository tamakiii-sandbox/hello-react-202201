.PHONY: help serve watch build clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

serve:
	npx webpack serve

watch:
	npx webpack --watch

build:
	npx webpack --mode production

clean:
	rm -rf node_modules
