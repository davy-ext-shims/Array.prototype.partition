import ArrayCreate from 'es-abstract/2020/ArrayCreate'
import ArraySpeciesCreate from 'es-abstract/2020/ArraySpeciesCreate'
import Call from 'es-abstract/2020/Call'
import CreateDataProperty from 'es-abstract/2020/CreateDataProperty'
import Get from 'es-abstract/2020/Get'
import HasProperty from 'es-abstract/2020/HasProperty'
import IsCallable from 'es-abstract/2020/IsCallable'
import LengthOfArrayLike from 'es-abstract/2020/LengthOfArrayLike'
import ToBoolean from 'es-abstract/2020/ToBoolean'
import ToObject from 'es-abstract/2020/ToObject'
import ToString from 'es-abstract/2020/ToString'

import callBound from 'call-bind/callBound'
import isString from 'is-string'

import { hasBoxedString } from './util/has-boxed-string'

export interface PartitionPrototypeImplementation {
  /**
   * Returns a pair of arrays, while first contains elements all satisfy the predication when second contains elements all fail the predication.
   * @param predictor A function that accepts up to three arguments. The partition method calls the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  <T, S extends T, TA = undefined>(
    this: T[],
    predictor: (this: TA, value: T, index: number, array: T[]) => value is S,
    thisArg?: TA
  ): [satisfied: S[], dissatisfied: Exclude<T, S>[]]
  /**
   * Returns a pair of arrays, while first contains elements all satisfy the predication when second contains elements all fail the predication.
   * @param predictor A function that accepts up to three arguments. The partition method calls the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  <T, TA = undefined>(this: T[], predictor: (this: TA, value: T, index: number, array: T[]) => unknown, thisArg?: TA): [
    satisfied: T[],
    dissatisfied: T[]
  ]
}

export interface PartitionImplementation<T> {
  /**
   * Returns a pair of arrays, while first contains elements all satisfy the predication when second contains elements all fail the predication.
   * @param predictor A function that accepts up to three arguments. The partition method calls the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  <S extends T, TA = undefined>(
    this: T[],
    predictor: (this: TA, value: T, index: number, array: T[]) => value is S,
    thisArg?: TA
  ): [satisfied: S[], dissatisfied: Exclude<T, S>[]]
  /**
   * Returns a pair of arrays, while first contains elements all satisfy the predication when second contains elements all fail the predication.
   * @param predictor A function that accepts up to three arguments. The partition method calls the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  <TA = undefined>(this: T[], predictor: (this: TA, value: T, index: number, array: T[]) => unknown, thisArg?: TA): [
    satisfied: T[],
    dissatisfied: T[]
  ]
}

// eslint-disable-next-line @typescript-eslint/ban-types
const String$split = callBound('String.prototype.split') as (str: String, splitter: string) => string[] // ES3

const partition: PartitionPrototypeImplementation = function <T>(
  this: T[],
  predictor: (value: T, index: number, array: T[]) => boolean,
  thisArg?: unknown
) {
  const O = ToObject(this)
  const __arrayLikeO = isString(O) && !hasBoxedString ? String$split(O, '') : O
  const len = LengthOfArrayLike(__arrayLikeO)

  if (!IsCallable(predictor)) {
    throw new TypeError('Array.prototype.partition predictor must be a function')
  }

  const A = ArraySpeciesCreate(O, 0)
  const B = ArraySpeciesCreate(O, 0)
  for (let k = 0, toA = 0, toB = 0; k < len; k += 1) {
    const Pk = ToString(k)
    const kPresent = HasProperty(O, Pk)
    if (kPresent) {
      const kValue = Get(O, Pk) as T
      const selected = ToBoolean(Call(predictor, thisArg, [kValue, k, O]))
      if (selected) {
        CreateDataProperty(A, ToString(toA), kValue)
        toA += 1
      } else {
        CreateDataProperty(B, ToString(toB), kValue)
        toB += 1
      }
    }
  }

  const Pair = ArrayCreate(2)
  CreateDataProperty(Pair, ToString(0), A)
  CreateDataProperty(Pair, ToString(1), B)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Pair as any
}

export default partition
