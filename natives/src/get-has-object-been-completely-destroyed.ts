import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_HAS_OBJECT_BEEN_COMPLETELY_DESTROYED
 *
 * 0x0DD5D60B63FBBFC2

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @returns {boolean}  
 */
export function getHasObjectBeenCompletelyDestroyed(objectID: ObjectIndex): boolean {
	const getHasObjectBeenCompletelyDestroyed_result = Citizen.invokeNative<boolean>('0x0DD5D60B63FBBFC2', objectID);
	return getHasObjectBeenCompletelyDestroyed_result;
}