import { Profile } from '@public-gateway/identity'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Review {
  @Field()
  id: string

  @Field()
  rating: number

  @Field()
  comment: string

  @Field(type => Profile)
  customer: Profile
}
