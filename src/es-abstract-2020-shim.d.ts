declare module 'es-abstract/2020/ArrayCreate' {
  import ArrayCreate from 'es-abstract/2019/ArrayCreate'
  export default ArrayCreate
}
declare module 'es-abstract/2020/ArraySpeciesCreate' {
  const ArraySpeciesCreate: <T extends Array<unknown>>(originalArray: T, length: number) => T
  export default ArraySpeciesCreate
}
declare module 'es-abstract/2020/Call' {
  import Call from 'es-abstract/2019/Call'
  export default Call
}
declare module 'es-abstract/2020/CreateDataProperty' {
  import CreateDataProperty from 'es-abstract/2019/CreateDataProperty'
  export default CreateDataProperty
}
declare module 'es-abstract/2020/Get' {
  import Get from 'es-abstract/2019/Get'
  export default Get
}
declare module 'es-abstract/2020/HasProperty' {
  import HasProperty from 'es-abstract/2019/HasProperty'
  export default HasProperty
}
declare module 'es-abstract/2020/IsCallable' {
  import IsCallable from 'es-abstract/2019/IsCallable'
  export default IsCallable
}
declare module 'es-abstract/2020/LengthOfArrayLike' {
  export default function LengthOfArrayLike(obj: ArrayLike<unknown>): number
}
declare module 'es-abstract/2020/RequireObjectCoercible' {
  import RequireObjectCoercible from 'es-abstract/2019/RequireObjectCoercible'
  export default RequireObjectCoercible
}
declare module 'es-abstract/2020/ToBoolean' {
  import ToBoolean from 'es-abstract/2019/ToBoolean'
  export default ToBoolean
}
declare module 'es-abstract/2020/ToString' {
  import ToString from 'es-abstract/2019/ToString'
  export default ToString
}
declare module 'es-abstract/2020/ToObject' {
  import ToObject from 'es-abstract/2019/ToObject'
  export default ToObject
}
