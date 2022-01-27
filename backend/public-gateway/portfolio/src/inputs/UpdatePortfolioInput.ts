import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class UpdatePortfolioInput {
  @Field((type) => ID)
  id: string

  @Field()
  name: string

  @Field((type) => [ID])
  images: string[]
}
