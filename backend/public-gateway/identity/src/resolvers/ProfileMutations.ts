import { Injectable }            from '@nestjs/common'
import { OnModuleInit }          from '@nestjs/common'
import { Args }                  from '@nestjs/graphql'
import { Context }               from '@nestjs/graphql'
import { Mutation }              from '@nestjs/graphql'
import { Client }                from '@nestjs/microservices'
import { ClientGrpc }            from '@nestjs/microservices'

import { clientOptions }         from '@protos/identity'
import { identity }              from '@protos/interfaces'

import { UpdateProfileInput }    from '../inputs'
import { UpdateProfileResponse } from '../types'

@Injectable()
export class ProfileMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private identityService: identity.IdentityService

  onModuleInit() {
    this.identityService = this.client.getService<identity.IdentityService>('IdentityService')
  }

  @Mutation((returns) => UpdateProfileResponse)
  updateProfile(
    @Args('input')
    input: UpdateProfileInput,
    @Context('user') id: string
  ) {
    return this.identityService.updateProfile({ ...input, id })
  }
}
