import { IsEnum }          from 'class-validator'
import { IsNotEmpty }      from 'class-validator'
import { IsUUID }          from 'class-validator'
import { Min }             from 'class-validator'

import { BeginningOfWork } from '@collaboration/domain'

export class CreateProjectCommand {
  @IsUUID('4')
  customerId: string

  @IsNotEmpty()
  name: string

  categoryId: string

  @IsNotEmpty()
  get category() {
    return this.categoryId
  }

  description: string

  photos: string[]

  @IsNotEmpty()
  address: string

  @IsEnum(BeginningOfWork)
  beginningOfWork: BeginningOfWork

  @Min(0)
  budget: number

  legalEntitiesOnly: boolean

  worksheet: string
}
