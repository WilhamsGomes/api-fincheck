import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionsOwnershipService {
  constructor(private readonly transactionRepo: TransactionsRepository) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionRepo.findFirst({
      where: { id: transactionId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Category not found');
    }
  }
}
