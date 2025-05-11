'use strict';
export default function exposeProperties<T>(obj: T, list = []) : void{
	for (let k of list) Object.defineProperty(obj, k, {
		...Object.getOwnPropertyDescriptor(obj, k),
		enumerable: true,
		configurable: false
	});
}