import type { HealthIndicatorResult } from '@nestjs/terminus'
import type { HealthCheckResult }     from '@nestjs/terminus'

import { BusHealthIndicator }         from '@monstrs/nestjs-bus-health'
import { Injectable }                 from '@nestjs/common'
import { HealthCheckService }         from '@nestjs/terminus'
import { HealthCheck }                from '@nestjs/terminus'
import { TypeOrmHealthIndicator }     from '@nestjs/terminus'

@Injectable()
export class HealthService {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: TypeOrmHealthIndicator,
    private readonly bus: BusHealthIndicator
  ) {}

  @HealthCheck()
  public async checkAlive(): Promise<HealthCheckResult> {
    return this.health.check([
      async (): Promise<HealthIndicatorResult> => this.db.pingCheck('database', { timeout: 300 }),
      async (): Promise<HealthIndicatorResult> => this.bus.pingCheck('bus'),
    ])
  }

  @HealthCheck()
  public async checkReady(): Promise<HealthCheckResult> {
    return this.health.check([
      async (): Promise<HealthIndicatorResult> => this.db.pingCheck('database', { timeout: 300 }),
      async (): Promise<HealthIndicatorResult> => this.bus.pingCheck('bus'),
    ])
  }
}
