import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:DOES_PICKUP_EXIST
 *
 * 0xB0E14182FAD64944

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @returns {boolean}  
 */
export function doesPickupExist(pickupID: PickupIndex): boolean {
	const doesPickupExist_result = Citizen.invokeNative<boolean>('0xB0E14182FAD64944', pickupID);
	return doesPickupExist_result;
}