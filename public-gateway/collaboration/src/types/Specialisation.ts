import { Category } from '@public-gateway/catalog'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Specialisation {
  @Field(type => [Category], { nullable: true })
  main: Category[]

  @Field(type => [Category], { nullable: true })
  additional: Category[]
}
