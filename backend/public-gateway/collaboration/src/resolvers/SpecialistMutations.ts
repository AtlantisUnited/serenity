import { Injectable }                from '@nestjs/common'
import { OnModuleInit }              from '@nestjs/common'
import { Args }                      from '@nestjs/graphql'
import { Context }                   from '@nestjs/graphql'
import { Mutation }                  from '@nestjs/graphql'
import { Client }                    from '@nestjs/microservices'
import { ClientGrpc }                from '@nestjs/microservices'

import { clientOptions }             from '@protos/collaboration'
import { collaboration }             from '@protos/interfaces'

import { ChangeAccountTypeInput }    from '../inputs'
import { UpdateSpecialistInput }     from '../inputs'
import { ChangeAccountTypeResponse } from '../types'
import { UpdateSpecialistResponse }  from '../types'

@Injectable()
export class SpecialistMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @Mutation((returns) => UpdateSpecialistResponse)
  updateSpecialist(
    @Args('input')
    input: UpdateSpecialistInput,
    @Context('user') id: string
  ) {
    return this.collaborationService.updateSpecialist({ ...input, id })
  }

  @Mutation((returns) => ChangeAccountTypeResponse)
  changeAccountType(
    @Args('input')
    input: ChangeAccountTypeInput,
    @Context('user') specialistId: string
  ) {
    return this.collaborationService.changeAccountType({
      ...input,
      specialistId,
    })
  }
}
