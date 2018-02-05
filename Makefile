.PHONY: help build start-dev upgrade deploy lint

default: help

# if Makefile.local exists, include it
ifneq ("$(wildcard Makefile.local)", "")
        include Makefile.local
endif

# Set colours
CC_FAIL=\x1b[31;01m
CC_WARN=\x1b[33;01m
CC_OKAY=\x1b[32;01m
CC_RESET=\x1b[0m

SHELL=/bin/bash

docker-compose := docker-compose -f docker/docker-compose.yml
docker-compose-run :=  ${docker-compose} run --rm web

start: ## Start the service (detatched)
	${docker-compose} up -d web

start-dev: ## Start the development server
	${docker-compose} up web

build: ## Build the application
	${docker-compose-run} yarn build

down: ## Down the application, removing container
	${docker-compose} down

stop: ## Stop the application without removing container
	${docker-compose} stop

clean: ## Down the application, removing container and volumes
	${docker-compose} down --rmi local --volumes

test: ## Test the application
	${docker-compose-run} yarn test

lint: ## Lint the application
	${docker-compose-run} yarn lint

lint-fix: ## Fix lint issues
	${docker-compose-run} yarn lint:fix

upgrade: ## Upgrade npm packages
	${docker-compose-run} yarn upgrade

help:
	@echo -e "$(CC_WARN)code4health-frontend$(CC_RESET)"
	@echo ""
	@echo "Options:"
	@egrep "^(.+)\:\ ##\ (.+)" $(MAKEFILE_LIST) | \
 		awk 'BEGIN {FS = ":.*?## "}; {printf "$(CC_OKAY)%s$(CC_RESET)|%s\n", $$1, $$2}' | \
		column -t -c 2 -s "|"
