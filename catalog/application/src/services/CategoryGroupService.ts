import { Injectable }                    from '@nestjs/common'

import { CategoryGroup }                 from '@catalog/domain'
import { CategoryGroupEntityRepository } from '@catalog/persistence'

import { CreateCategoryGroupCommand }    from '../commands/index.js'
import { DeleteCategoryGroupCommand }    from '../commands/index.js'
import { UpdateCategoryGroupCommand }    from '../commands/index.js'

@Injectable()
export class CategoryGroupService {
  constructor(private readonly categoryGroupRepository: CategoryGroupEntityRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(command: CreateCategoryGroupCommand): Promise<any> {
    const categoryGroup = await CategoryGroup.create(command.id, command.name)

    await this.categoryGroupRepository.save(categoryGroup)

    return categoryGroup
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async update(command: UpdateCategoryGroupCommand): Promise<any> {
    const categoryGroup = await this.categoryGroupRepository.getById(command.id)

    categoryGroup.update(command.name)

    await this.categoryGroupRepository.save(categoryGroup)

    return categoryGroup
  }

  async delete(command: DeleteCategoryGroupCommand): Promise<{ id: string }> {
    const categoryGroup = await this.categoryGroupRepository.getById(command.id)

    categoryGroup.purge()

    await this.categoryGroupRepository.save(categoryGroup)

    return {
      id: command.id,
    }
  }
}
