const { Kafka } = require("kafkajs");

class Producer {
    constructor() {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"],
        });
        this.producer = kafka.producer();
    }

    produce(message) {
        (async () => {
            await this.producer.connect();
            await this.producer.send({
                topic: "my-topic",
                messages: [{ value: message }],
            });
            await this.producer.disconnect();
        })();
    }
}

let producer = new Producer();
producer.produce("A kafka message!");