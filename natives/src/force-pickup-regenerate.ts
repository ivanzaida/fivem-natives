import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:FORCE_PICKUP_REGENERATE
 *
 * 0x59955A005920818D

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 */
export function forcePickupRegenerate(pickupID: PickupIndex): void {
	const forcePickupRegenerate_result = Citizen.invokeNative<void>('0x59955A005920818D', pickupID);
	return forcePickupRegenerate_result;
}