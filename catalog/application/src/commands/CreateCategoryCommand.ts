import { IsUUID }    from 'class-validator'
import { MinLength } from 'class-validator'
import { v4 as uuid }          from 'uuid'

export class CreateCategoryCommand {
  id: string = uuid()

  @MinLength(1)
  name: string

  @IsUUID('4')
  groupId: string
}
