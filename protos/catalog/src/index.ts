import type { ClientOptions }         from '@nestjs/microservices'

import path                           from 'node:path'

import { Transport }                  from '@nestjs/microservices'

import { PROTO_PATH as COMMON_PROTO } from '@protos/common'

const protosPath = path.dirname(new URL(import.meta.url).pathname)

export const PROTO_PATH = path.join(protosPath, '../catalog.proto')

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'catalog',
    url: process.env.CATALOG_SERVICE_URL || 'catalog-service:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}

export const serverOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'catalog',
    url: '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}
