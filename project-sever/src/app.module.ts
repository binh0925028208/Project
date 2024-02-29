import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AdminsModule } from './modules/admins/admins.module';
import { RatingsModule } from './modules/ratings/ratings.module';
import { CommentsModule } from './modules/comments/comments.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { OrderItemsModule } from './modules/orderItems/orderItems.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    UsersModule,
    AdminsModule,
    RatingsModule,
    CommentsModule,
    PaymentsModule,
    OrderItemsModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
