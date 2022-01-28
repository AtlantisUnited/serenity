import { Field, ObjectType } from 'type-graphql'

import { RejectProjectReplyErrors } from './RejectProjectReplyErrors'
import { Reply } from './Reply'

@ObjectType()
export class RejectProjectReplyResponse {
  @Field(type => Reply, { nullable: true })
  result?: Reply

  @Field(type => RejectProjectReplyErrors, { nullable: true })
  errors?: RejectProjectReplyErrors
}
