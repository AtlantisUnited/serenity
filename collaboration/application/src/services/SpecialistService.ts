import { Injectable }                 from '@nestjs/common'

import { Company }                    from '@collaboration/domain'
import { FormOfWork }                 from '@collaboration/domain'
import { PrivatePerson }              from '@collaboration/domain'
import { Specialisation }             from '@collaboration/domain'
import { SpecialistEntityRepository } from '@collaboration/persistence'

import { ChangeAccountTypeCommand }   from '../commands/index.js'
import { UpdateSpecialistCommand }    from '../commands/index.js'

@Injectable()
export class SpecialistService {
  constructor(private readonly specialistRepository: SpecialistEntityRepository) {}

  async update(command: UpdateSpecialistCommand): Promise<any> {
    const specialist = await this.specialistRepository.getById(command.id)

    const interaction =
      command.formOfWork === FormOfWork.company
        ? new Company(command.companyName, command.numberOfEmployees)
        : new PrivatePerson()

    specialist.update(
      interaction,
      new Specialisation(command.mainSpecialisation, command.additionalSpecialisation),
      command.description
    )

    await this.specialistRepository.save(specialist)

    return specialist
  }

  async changeAccountType(command: ChangeAccountTypeCommand): Promise<any> {
    const specialist = await this.specialistRepository.getById(command.specialistId)

    specialist.changeAccountType(command.type)

    await this.specialistRepository.save(specialist)

    return specialist
  }
}
