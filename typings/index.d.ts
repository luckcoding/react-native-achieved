type Modifier<T extends string> = Partial<Record<T, boolean>>;
type Constructor<T, TA = any> = new (...args: TA[]) => T;
type Dictionary<TYPE> = {[key: string]: TYPE};
