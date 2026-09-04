.PHONY: all dev

all: dev

dev:
	npm run dev

build:
	docker build -t universium-website . --no-cache

rebuild:
	docker compose down
	docker build -t universium-website . --no-cache
	docker compose up -d
