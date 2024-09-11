import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:DOES_PICKUP_OBJECT_EXIST
 *
 * 0x313F30E8A7FB3625

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @returns {boolean}  
 */
export function doesPickupObjectExist(pickupID: PickupIndex): boolean {
	const doesPickupObjectExist_result = Citizen.invokeNative<boolean>('0x313F30E8A7FB3625', pickupID);
	return doesPickupObjectExist_result;
}