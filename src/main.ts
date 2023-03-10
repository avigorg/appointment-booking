import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Servicio de agendamiento de turnos')
    .setDescription('API que permite a los clientes de varios comercios reservar con anticipación un espacio de atención en un servicio específico que presta cada comercio.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(7532);

  
 
}
bootstrap();
