.PHONY: help build start-dev upgrade deploy lint

default: help

COLOUR_WARN=\x1b[31;01m
COLOUR_RESET=\x1b[0m
COLOUR_OKAY=\x1b[32;01m

docker-compose := docker-compose -f docker/docker-compose.yml
docker-compose-run :=  ${docker-compose} run --rm web

start-dev: ## Start the development server
	${docker-compose} up web

build: ## Build the application
	${docker-compose-run} yarn build

stop: ##  Stop the application
	${docker-compose} down

test: ## Test the application
	${docker-compose-run} yarn test

lint: ## Lint the application
	${docker-compose-run} yarn lint

lint-fix: ## Fix lint issues
	${docker-compose-run} yarn lint:fix

upgrade: ## Upgrade npm packages
	${docker-compose-run} yarn upgrade

help: ## Show this help message
	@echo ""
	@echo "$(COLOUR_WARN)code4health-frontend$(COLOUR_RESET)"
	@echo ""
	@echo "commands:"
	@egrep "^(.+)\:\ ##\ (.+)" $(MAKEFILE_LIST) | \
	 	awk 'BEGIN {FS = ":.*?## "}; {printf "$(COLOUR_OKAY)%s$(COLOUR_RESET)|%s\n", $$1, $$2}' | \
		column -t -c 2 -s "|"
