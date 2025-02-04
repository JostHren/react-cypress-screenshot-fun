
.DEFAULT_GOAL := help

.PHONY: help setup run

help: ## Show help
	@echo "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:"
	@grep -E '^[a-zA-Z0-9_/%\-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-28s\033[0m %s\n", $$1, $$2}'

setup: ## Install package dependencies
	npm install

run/dev : ## Run the application in development environment
	npm run dev

docker/frontend: ## Run the frontend in docker environment
	docker-compose up --build react-app -d

docker/e2e: ## Run the e2e tests in docker environment
	docker-compose up e2e

docker/e2e/generate: ## Run the e2e tests in docker environment and generate new screenshots
	docker-compose run -e CYPRESS_SCREENSHOT_TEST_GENERATE=true e2e