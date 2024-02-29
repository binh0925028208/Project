import { Module } from '@nestjs/common';
import { OrderItemsService } from './orderItems.service';
import { OrderItemsController } from './orderItems.controller';

@Module({
  providers: [OrderItemsService],
  controllers: [OrderItemsController]
})
export class OrderItemsModule {}
