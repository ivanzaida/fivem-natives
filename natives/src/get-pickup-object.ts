import { PickupIndex, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_PICKUP_OBJECT
 *
 * 0xA9D6BD2486442887

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @returns {ObjectIndex}  
 */
export function getPickupObject(pickupID: PickupIndex): ObjectIndex {
	const getPickupObject_result = Citizen.invokeNative<ObjectIndex>('0xA9D6BD2486442887', pickupID);
	return getPickupObject_result;
}