import { PageInfo } from '@public-gateway/types'
import { Field, ObjectType } from 'type-graphql'

import { Specialist } from './Specialist'

@ObjectType()
export class SpecialistsList {
  @Field(type => [Specialist])
  rows: Specialist[]

  @Field(type => PageInfo)
  pageInfo: PageInfo
}
