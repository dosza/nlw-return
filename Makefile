up:
	docker-compose up
down:
	docker-compose down
stop:
	docker-compose stop

build:
	docker-compose up --build

destroy:
	docker-compose down -v

clean:
	docker-compose down --rmi local -v
all: up


