import { NestDataLoader } from '@atls/nestjs-dataloader'
import { Injectable }     from '@nestjs/common'
import { OnModuleInit }   from '@nestjs/common'
import { Client }         from '@nestjs/microservices'
import { ClientGrpc }     from '@nestjs/microservices'
import { map }            from 'rxjs/operators'
import DataLoader         from 'dataloader'

import { clientOptions }  from '@protos/collaboration'
import { collaboration }  from '@protos/interfaces'

@Injectable()
export class ReplyLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  getReplies = async (projectId: string[]) => {
    const replies = await this.collaborationService
      .getReplies({ filters: { projectId } })
      .pipe(map((data) => data.rows))
      .toPromise()

    // @ts-ignore
    return projectId.map((id) => replies.filter((reply) => reply.projectId === id))
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, collaboration.Reply[]>(this.getReplies)
  }
}
