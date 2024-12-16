import type { HealthCheckResult } from '@nestjs/terminus'

import { Controller }             from '@nestjs/common'
import { Get }                    from '@nestjs/common'

import { HealthService }          from './health.service.js'

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('alive')
  public async getAlive(): Promise<HealthCheckResult> {
    return this.healthService.checkAlive()
  }

  @Get('ready')
  public async getReady(): Promise<HealthCheckResult> {
    return this.healthService.checkReady()
  }
}
