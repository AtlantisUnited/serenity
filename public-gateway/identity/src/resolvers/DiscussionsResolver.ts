import { Injectable }    from '@nestjs/common'
import { OnModuleInit }  from '@nestjs/common'
import { ResolveField }  from '@nestjs/graphql'
import { Resolver }      from '@nestjs/graphql'
import { Root }          from '@nestjs/graphql'
import { Client }        from '@nestjs/microservices'
import { ClientGrpc }    from '@nestjs/microservices'

import { map }           from 'rxjs/operators'

import { clientOptions } from '@protos/collaboration'
import { collaboration } from '@protos/interfaces'

import { User }          from '../types'

@Injectable()
@Resolver((of) => User)
export class DiscussionsResolver implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @ResolveField()
  discussions(
    @Root()
    user: any
  ) {
    const filters: any = {}

    if (user.profile.type === 'specialist') {
      filters.specialistId = [user.id]
    } else {
      filters.customerId = [user.id]
    }

    return this.collaborationService
      .getChatDiscussions({ filters })
      .pipe(map((data: any) => data.rows))
  }
}
