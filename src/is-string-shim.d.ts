/* eslint-disable @typescript-eslint/ban-types */

declare module 'is-string' {
  const isString: {
    (value: string): true
    (value: String): true
    (value: Object): value is String
    (value: unknown): value is string | String
  }

  export default isString
}
