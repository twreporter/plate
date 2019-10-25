P="\\033[32m[+]\\033[0m"

MONGODB?=mongodb://localhost:27017/plate 
KEYSTONE_DEV=true

help:
	@echo "$(P) make dev"
	@echo "to start server in development mode"
	@echo "$(P) make start"
	@echo "to start server in production mode"
	@echo "$(P) make build-conifg"
	@echo "to build config on demand"


build-config:
	@echo "build conifg on demand"
	@node build-config

build-config-if-needed:
ifeq (,$(wildcard ./config.js))
	@echo "build config on demand"	
	@node build-config
endif

dev:build-config-if-needed
	@echo "$(P) NODE_ENV=development KEYSTONE_DEV=$(KEYSTONE_DEV) node keystone"
	NODE_ENV=development KEYSTONE_DEV=$(KEYSTONE_DEV) node keystone

start:build-config-if-needed
	NODE_ENV=production node keystone

clean:
	@rm ./config.js

.PHONY: help dev start build-config clean build-config-if-needed
