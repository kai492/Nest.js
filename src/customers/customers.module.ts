import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware).forRoutes({
      path: 'customers',
      method: RequestMethod.GET
    },
    {
      path: 'customers/search/:id',
      method: RequestMethod.GET
    },)
  };
}

// .forRoutes(CustomerController) for all the route. and .exclude to exclude