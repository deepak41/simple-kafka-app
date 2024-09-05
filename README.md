# Simple Kafka App

This app is used to upload file using Multer in Node.js.

## How to run:

Install dependencies.

```bash
npm i
```

Start kafka in a docker container.

```bash
docker-compose -f zk-single-kafka-single.yml up -d
```

Run producer.js

```bash
node producer.js
```

Run consumer.js

```bash
node consumer.js
```

## License

**Free Software, Hell Yeah!** ⭐
