import define from 'define-properties'

import getPolyfill from './polyfill'

export default (): void => {
  const polyfill = getPolyfill()
  define(
    Array.prototype,
    { partition: polyfill },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { partition: () => (Array.prototype as any)['partition'] !== polyfill }
  )
}
