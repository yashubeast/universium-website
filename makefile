.PHONY: all dev

all: dev

dev:
	npm run dev

build:
	docker compose build --no-cache

rebuild:
	docker compose down
	docker compose build --no-cache
	docker compose up -d
