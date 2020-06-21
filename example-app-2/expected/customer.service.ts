import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import Customer from "./customer";

import {
  FindOneCustomerArgs,
  FindManyCustomerArgs,
  CustomerCreateArgs,
} from "@prisma/client";

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(args: FindOneCustomerArgs): Promise<Customer> {
    return this.prisma.customer.findOne(args);
  }

  findMany(args: FindManyCustomerArgs): Promise<Customer[]> {
    return this.prisma.customer.findMany(args);
  }

  create(args: CustomerCreateArgs): Promise<Customer> {
    return this.prisma.customer.create(args);
  }
}
