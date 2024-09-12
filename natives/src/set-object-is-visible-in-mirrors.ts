import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_IS_VISIBLE_IN_MIRRORS
 *
 * 0x5D56BEB3F5597195

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} enable
 */
export function setObjectIsVisibleInMirrors(object: ObjectIndex, enable: boolean): void {
	const setObjectIsVisibleInMirrors_result = Citizen.invokeNative<void>('0x5D56BEB3F5597195', object, enable);
	return setObjectIsVisibleInMirrors_result;
}