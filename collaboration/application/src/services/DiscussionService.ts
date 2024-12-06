import { Injectable }                  from '@nestjs/common'

import { Chat }                        from '@collaboration/domain'
import { Discussion }                  from '@collaboration/domain'
import { ChatEntityRepository }        from '@collaboration/persistence'
import { DiscussionEntityRepository }  from '@collaboration/persistence'
import { MessageEntityRepository }     from '@collaboration/persistence'

import { AddDiscussionMessageCommand } from '../commands/index.js'

@Injectable()
export class DiscussionService {
  constructor(
    private readonly messageRepository: MessageEntityRepository,
    private readonly discussionRepository: DiscussionEntityRepository,
    private readonly chatRepository: ChatEntityRepository
  ) {}

  async addMessage(command: AddDiscussionMessageCommand): Promise<any> {
    let chat = await this.chatRepository.getByParticipants(command.customerId, command.specialistId)

    if (!chat) {
      const discussion = Discussion.create(command.specialistId, command.customerId)
      chat = Chat.create(command.customerId, command.specialistId, discussion.id)

      await this.discussionRepository.save(discussion)
      await this.chatRepository.save(chat)
    }

    const discussion = await this.discussionRepository.getById(chat.discussionId)

    const message = discussion.message(command.authorId, command.message)

    await this.messageRepository.save(message)

    return message
  }
}
