import { Injectable }        from '@nestjs/common'
import { OnModuleInit }      from '@nestjs/common'
import { Args }              from '@nestjs/graphql'
import { Query }             from '@nestjs/graphql'
import { Client }            from '@nestjs/microservices'
import { ClientGrpc }        from '@nestjs/microservices'

import { Int }               from 'type-graphql'

import { OffsetToPagerPipe } from '@public-gateway/utils'
import { Pager }             from '@public-gateway/utils'
import { clientOptions }     from '@protos/collaboration'
import { collaboration }     from '@protos/interfaces'

import { SpecialistsFilter } from '../inputs'
import { SpecialistsList }   from '../types'

@Injectable()
export class SpecialistQueries implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @Query((returns) => SpecialistsList)
  specialists(
    @Args({ name: 'offset', nullable: true, type: () => Int as any }, new OffsetToPagerPipe())
    pager: Pager,

    @Args({ name: 'filters', nullable: true, type: () => SpecialistsFilter })
    filters: SpecialistsFilter
  ) {
    return this.collaborationService.getSpecialists({ pager, filters })
  }
}
