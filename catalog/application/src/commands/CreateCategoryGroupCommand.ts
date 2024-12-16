import { MinLength }  from 'class-validator'
import { v4 as uuid } from 'uuid'

export class CreateCategoryGroupCommand {
  @MinLength(1)
  name: string

  id: string = uuid()
}
