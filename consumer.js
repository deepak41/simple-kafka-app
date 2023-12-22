const { Kafka } = require("kafkajs");

class Consumer {
    constructor() {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"],
        });
        this.consumer = kafka.consumer({ groupId: "test-group" });
    }

    consume() {
        (async () => {
            await this.consumer.connect();
            await this.consumer.subscribe({
                topic: "my-topic",
                fromBeginning: true,
            });
            await this.consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    console.log(message.value.toString());
                },
            });
        })();
    }
}

let consumer = new Consumer();
consumer.consume();