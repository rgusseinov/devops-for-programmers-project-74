dev:
	docker-compose run app make start

ci:
	docker-compose -f docker-compose.yml up -abort-on-container-exit