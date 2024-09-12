import { PickupIndex, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:ADD_BLIP_FOR_PICKUP
 *
 * 0xA1521B7DF72BC9C8

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickup
 * @returns {BlipIndex}  
 */
export function addBlipForPickup(pickup: PickupIndex): BlipIndex {
	const addBlipForPickup_result = Citizen.invokeNative<BlipIndex>('0xA1521B7DF72BC9C8', pickup);
	return addBlipForPickup_result;
}