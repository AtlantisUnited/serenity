import { AggregateRoot }           from '@node-ts/ddd'
/* eslint-disable no-underscore-dangle */
import { AggregateRootProperties } from '@node-ts/ddd-types'

import { SpecialistRatingUpdated } from '../events/index.js'
import { SpecialistUpdated }       from '../events/index.js'
import { Account }                 from './Account.js'
import { AccountType }             from './AccountType.js'
import { Company }                 from './Company.js'
import { FormOfWork }              from './FormOfWork.js'
import { PrivatePerson }           from './PrivatePerson.js'
import { Specialisation }          from './Specialisation.js'

export interface SpecialistProperties extends AggregateRootProperties {
  interaction: PrivatePerson | Company

  specialisation: Specialisation

  description: string

  rating: number

  reviewCount: number

  completedProjects: number

  account: Account
}

export class Specialist extends AggregateRoot implements SpecialistProperties {
  interaction: PrivatePerson | Company

  specialisation: Specialisation

  description: string

  rating: number = 0

  reviewCount: number

  completedProjects: number

  account: Account

  update(
    interaction: PrivatePerson | Company,
    specialisation: Specialisation,
    description?: string
  ) {
    // @ts-ignore
    this.when(new SpecialistUpdated(this.id, interaction, specialisation, description))
  }

  updateRating(rating: number) {
    this.when(new SpecialistRatingUpdated(this.id, rating))
  }

  incrementReviewCount() {
    this.reviewCount += 1
  }

  incrementCompletedProjects() {
    this.completedProjects += 1
  }

  changeAccountType(type: AccountType) {
    this.account.changeType(type)
  }

  protected whenSpecialistUpdated(event: SpecialistUpdated): void {
    this.specialisation = event.specialisation
    this.interaction = event.interaction
    this.description = event.description
  }

  protected whenSpecialistRatingUpdated(event: SpecialistRatingUpdated): void {
    this.rating = event.rating
  }

  set _interaction(interaction: any) {
    if (interaction.formOfWork === FormOfWork.company) {
      this.interaction = new Company(interaction.name, interaction.numberOfEmployees)
    } else {
      this.interaction = new PrivatePerson()
    }
  }
}
