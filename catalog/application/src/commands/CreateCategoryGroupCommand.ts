import { MinLength } from 'class-validator'
import { v4 as uuid }          from 'uuid'

export class CreateCategoryGroupCommand {
  id: string = uuid()

  @MinLength(1)
  name: string
}
