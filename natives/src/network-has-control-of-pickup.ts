import { PickupIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_CONTROL_OF_PICKUP
 *
 * 0x0FB4A5FDA5B2A809

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickup
 * @returns {boolean}  
 */
export function networkHasControlOfPickup(pickup: PickupIndex): boolean {
	const networkHasControlOfPickup_result = Citizen.invokeNative<boolean>('0x0FB4A5FDA5B2A809', pickup);
	return networkHasControlOfPickup_result;
}