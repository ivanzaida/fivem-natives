import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:HAS_PICKUP_BEEN_COLLECTED
 *
 * 0x1D56B24774D5E23C

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @returns {boolean}  
 */
export function hasPickupBeenCollected(pickupID: PickupIndex): boolean {
	const hasPickupBeenCollected_result = Citizen.invokeNative<boolean>('0x1D56B24774D5E23C', pickupID);
	return hasPickupBeenCollected_result;
}