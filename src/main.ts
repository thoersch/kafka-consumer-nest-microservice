import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka-2.kafka.default.svc.cluster.local:9092'],
      },
      consumer: {
          groupId: 'nest-kafka-consumer',
      }
    }
  });

  app.listen(() => console.log('Kafka consumer service is listening!'))
}
bootstrap();
