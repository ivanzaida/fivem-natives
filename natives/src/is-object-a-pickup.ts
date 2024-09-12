import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_OBJECT_A_PICKUP
 *
 * 0xDC4C404BF0F7C610

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @returns {boolean}  
 */
export function isObjectAPickup(objectID: ObjectIndex): boolean {
	const isObjectAPickup_result = Citizen.invokeNative<boolean>('0xDC4C404BF0F7C610', objectID);
	return isObjectAPickup_result;
}