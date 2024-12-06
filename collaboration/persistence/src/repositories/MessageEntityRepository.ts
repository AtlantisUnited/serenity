import { Bus }                      from '@monstrs/nestjs-bus'
import { Logger }                   from '@monstrs/nestjs-logger'
import { Injectable }               from '@nestjs/common'
import { WriteRepository }          from '@node-ts/ddd'
import { Connection }               from 'typeorm'

import { Message as MessageEntity } from '@collaboration/domain'

import { Message }                  from '../entities/index.js'

@Injectable()
// @ts-ignore
export class MessageEntityRepository extends WriteRepository<MessageEntity, Message> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(MessageEntity, Message, connection, bus, logger)
  }
}
