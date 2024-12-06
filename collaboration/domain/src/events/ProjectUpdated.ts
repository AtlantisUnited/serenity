import { Event }           from '@node-ts/bus-messages'
import { Uuid }            from '@node-ts/ddd-types'

import { Address }         from '../model/index.js'
import { BeginningOfWork } from '../model/index.js'

export class ProjectUpdated extends Event {
  static readonly NAME = 'collaboration/project-updated'

  $name = ProjectUpdated.NAME

  $version = 0

  constructor(
    readonly projectId: Uuid,
    readonly name: string,
    readonly photos: string[],
    readonly address: Address,
    readonly beginningOfWork: BeginningOfWork,
    readonly budget: number,
    readonly legalEntitiesOnly: boolean,
    readonly worksheet: string,
    readonly description?: string
  ) {
    super()
  }
}
