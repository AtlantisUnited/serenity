/* eslint-disable @typescript-eslint/no-empty-function */
import type { AggregateRootProperties } from '@node-ts/ddd-types'

import { AggregateRoot }                from '@node-ts/ddd'

import { CategoryCreated }              from '../events/index.js'
import { CategoryDeleted }              from '../events/index.js'
import { CategoryUpdated }              from '../events/index.js'

export interface CategoryProperties extends AggregateRootProperties {
  groupId: string
  name: string
}

export class Category extends AggregateRoot implements CategoryProperties {
  groupId: string

  name: string

  static async create(id: string, groupId: string, name: string): Promise<Category> {
    const category = new Category(id)

    category.when(new CategoryCreated(id, groupId, name))

    return category
  }

  update(name: string): void {
    this.when(new CategoryUpdated(this.id, name))
  }

  purge(): void {
    this.delete(new CategoryDeleted(this.id))
  }

  protected whenCategoryCreated(event: CategoryCreated): void {
    this.groupId = event.groupId
    this.name = event.name
  }

  protected whenCategoryUpdated(event: CategoryUpdated): void {
    this.name = event.name
  }

  protected whenCategoryDeleted(event: CategoryDeleted): void {}
}
