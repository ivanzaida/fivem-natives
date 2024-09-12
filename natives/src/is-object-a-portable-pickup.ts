import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_OBJECT_A_PORTABLE_PICKUP
 *
 * 0x0051FB632E333967

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @returns {boolean}  
 */
export function isObjectAPortablePickup(objectID: ObjectIndex): boolean {
	const isObjectAPortablePickup_result = Citizen.invokeNative<boolean>('0x0051FB632E333967', objectID);
	return isObjectAPortablePickup_result;
}