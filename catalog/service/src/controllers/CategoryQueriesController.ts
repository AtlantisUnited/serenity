import { Controller }             from '@nestjs/common'

import { CategoryQueriesService } from '@catalog/application'

// import { GrpcMethod }             from '@nestjs/microservices'

// import { FindAllResponse }        from '@catalog/application'
// import { Category }               from '@catalog/persistence'

@Controller()
export class CategoryQueriesController {
  constructor(private readonly categoryService: CategoryQueriesService) {}

  // @GrpcMethod('CatalogService', 'getCategories')
  // async getCategories({ filters }): Promise<FindAllResponse<Category>> {
  //   return this.categoryService.findAll(filters)
  // }
}
