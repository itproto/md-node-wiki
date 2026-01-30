type ValueOrFn<T, R> = R | ((arg: T) => R);

function resolveValue<T, R>(value: ValueOrFn<T, R>, arg: T): R {
  return typeof value === "function" ? value(arg) : value;
}
