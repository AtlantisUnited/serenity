import { Field }                   from '@nestjs/graphql'

import { ObjectType }       from '@nestjs/graphql'

import { ChangeReplyStatusErrors } from './ChangeReplyStatusErrors'
import { Reply }                   from './Reply'

@ObjectType()
export class ChangeReplyStatusResponse {
  @Field((type) => Reply, { nullable: true })
  result?: Reply

  @Field((type) => ChangeReplyStatusErrors, { nullable: true })
  errors?: ChangeReplyStatusErrors
}
