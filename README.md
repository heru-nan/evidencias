# AVANCE-2

TO START APP

```
docker compose -f docker-compose.yml up --build
```

o

```
docker-compose -f docker-compose.yml up --build
```

TO START DATABASE ONLY

```
docker compose -f dev-db.yml up --build
```

o

```
docker-compose -f dev-db.yml up --build
```

```
docker stop $ (docker ps -a -q)
```

```
docker rm $ (docker ps -a -q)
```
