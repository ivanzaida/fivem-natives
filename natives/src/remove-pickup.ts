import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:REMOVE_PICKUP
 *
 * 0xDDFB0941A19702BE

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 */
export function removePickup(pickupID: PickupIndex): void {
	const removePickup_result = Citizen.invokeNative<void>('0xDDFB0941A19702BE', pickupID);
	return removePickup_result;
}