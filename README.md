# template_node_sequelize_vue_postgres

template_node_sequelize_vue_postgres is a template project for node-sequelize backend and vue frontend with postgres database

## Configuration

1. First rename all containers in 
```
docker-compose.yml
```

2. Rename all package.json


## Installation

First start the docker container from project folder

```bash
docker compose up
```

Second initial setup of databse

```bash
cd ./backend && npm run recreate
```

After that feel free to code


## License
[MIT](https://choosealicense.com/licenses/mit/)