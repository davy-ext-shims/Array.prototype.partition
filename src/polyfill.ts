import implementation, { PartitionPrototypeImplementation } from './implementation'

export default function getPolyfill(): PartitionPrototypeImplementation {
  return implementation
}
