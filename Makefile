.PHONY: install start build

include .env
export

install:
	yarn

start:
	yarn dev

build:
	yarn build
