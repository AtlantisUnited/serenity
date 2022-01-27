/* eslint-disable no-underscore-dangle */
import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

@Entity()
export class File {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  type: string

  @Column()
  name: string

  @Column()
  url: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
