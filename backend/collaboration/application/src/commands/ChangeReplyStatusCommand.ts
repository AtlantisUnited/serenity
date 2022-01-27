import { IsNotEmpty }  from 'class-validator'
import { IsUUID }      from 'class-validator'

import { ReplyStatus } from '@collaboration/domain'

export class ChangeReplyStatusCommand {
  @IsUUID('4')
  replyId: string

  @IsNotEmpty()
  status: ReplyStatus
}
