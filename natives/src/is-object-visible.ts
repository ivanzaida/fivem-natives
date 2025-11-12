import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_OBJECT_VISIBLE
 *
 * 0xF31BAE02C52ADEFD

 * 
 * Request results of visibility tracking for an object
 * return TRUE if visibile, FALSE if not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @returns {boolean}  
 */
export function isObjectVisible(objectID: ObjectIndex): boolean {
	const isObjectVisible_result = Citizen.invokeNative<boolean>('0xF31BAE02C52ADEFD', objectID);
	return isObjectVisible_result;
}