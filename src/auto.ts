import { PartitionImplementation } from './implementation'
import shim from './shim'

declare global {
  interface Array<T> {
    partition: PartitionImplementation<T>
  }
}

shim()
