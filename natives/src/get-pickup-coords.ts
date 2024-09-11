import { PickupIndex, Vector3 } from '@ivanzaida/structures'

/**
 * OBJECT:GET_PICKUP_COORDS
 *
 * 0x80C8AA1625977488

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @returns {Vector3}  
 */
export function getPickupCoords(pickupID: PickupIndex): Vector3 {
	const getPickupCoords_result = Citizen.invokeNative<Vector3>('0x80C8AA1625977488', pickupID);
	return getPickupCoords_result;
}