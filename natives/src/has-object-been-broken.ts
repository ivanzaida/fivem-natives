import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:HAS_OBJECT_BEEN_BROKEN
 *
 * 0x1C3788A51C49D6AD

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {boolean} networked
 * @returns {boolean}  
 */
export function hasObjectBeenBroken(objectID: ObjectIndex, networked: boolean = false): boolean {
	const hasObjectBeenBroken_result = Citizen.invokeNative<boolean>('0x1C3788A51C49D6AD', objectID, networked);
	return hasObjectBeenBroken_result;
}