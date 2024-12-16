/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url'
import path              from 'path'

// Resolve the directory of the current module file using import.meta.url
const __filename = fileURLToPath(import.meta.url)
const protosPath = path.dirname(__filename)

export const PROTO_PATH = path.join(protosPath, '../common.proto')
