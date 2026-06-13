up:
	docker compose up --build

down:
	docker compose down

test:
	npm test

push:
	git add .
	git commit -m "Update"
	git push

logs:
	docker compose logs -f
