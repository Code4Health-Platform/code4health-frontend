.PHONY: help build start-dev upgrade deploy lint

default: help

COLOR_WARN=\x1b[31;01m
COLOR_RESET=\x1b[0m
COLOR_OKAY=\x1b[32;01m

docker-compose := docker-compose -f docker/docker-compose.yml
docker-compose-run :=  ${docker-compose} run --rm web
docker-compose-up := ${docker-compose} up web

start-dev: ## Start the development server
	${docker-compose-up}

build: ## Build the application
	${docker-compose-run} yarn build

test: ## Test the application
	${docker-compose-run} yarn test

lint: ## Lint the application
	${docker-compose-run} yarn lint

upgrade: ## Upgrade npm packages
	${docker-compose-run} yarn upgrade

help: ## Show this help message
	@echo ""
	@echo "$(COLOR_WARN)code4health-frontend$(COLOR_RESET)"
	@echo ""
	@echo "commands:"
	@egrep "^(.+)\:\ ##\ (.+)" $(MAKEFILE_LIST) | \
	 	awk 'BEGIN {FS = ":.*?## "}; {printf "$(COLOR_OKAY)%s$(COLOR_RESET)|%s\n", $$1, $$2}' | \
		column -t -c 2 -s "|"
