import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CreateProjectErrors {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  category?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  photos?: string

  @Field({ nullable: true })
  address?: string

  @Field({ nullable: true })
  beginningOfWork?: string

  @Field({ nullable: true })
  budget?: string

  @Field({ nullable: true })
  legalEntitiesOnly?: string
}
