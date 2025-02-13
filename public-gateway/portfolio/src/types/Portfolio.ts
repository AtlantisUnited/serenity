import { File } from '@public-gateway/files'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Portfolio {
  @Field(type => ID)
  id: string

  @Field()
  name: string

  @Field(type => [File])
  images: File[]
}
