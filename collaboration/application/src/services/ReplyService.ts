import { Injectable }                 from '@nestjs/common'

import { DiscussionEntityRepository } from '@collaboration/persistence'
import { MessageEntityRepository }    from '@collaboration/persistence'
import { ProjectEntityRepository }    from '@collaboration/persistence'
import { ReplyEntityRepository }      from '@collaboration/persistence'

import { AddReplyMessageCommand }     from '../commands/index.js'
import { ChangeReplyStatusCommand }   from '../commands/index.js'

@Injectable()
export class ReplyService {
  constructor(
    private readonly projectRepository: ProjectEntityRepository,
    private readonly messageRepository: MessageEntityRepository,
    private readonly discussionRepository: DiscussionEntityRepository,
    private readonly replyRepository: ReplyEntityRepository
  ) {}

  async addMessage(command: AddReplyMessageCommand): Promise<any> {
    const reply = await this.replyRepository.getById(command.replyId)
    const discussion = await this.discussionRepository.getById(reply.discussionId)

    const message = discussion.message(command.authorId, command.message)

    await this.messageRepository.save(message)

    return message
  }

  async changeStatus(command: ChangeReplyStatusCommand): Promise<any> {
    const reply = await this.replyRepository.getById(command.replyId)
    const project = await this.projectRepository.getById(reply.projectId)

    project.changeReplyStatus(reply, command.status)

    await this.replyRepository.save(reply)

    return reply
  }
}
