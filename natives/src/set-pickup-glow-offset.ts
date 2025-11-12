import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_GLOW_OFFSET
 *
 * 0xED6967E98C0B750B

 * 
 * p1 is always 0.51. This native is called before SET_PICKUP_REGENERATION_TIME in all occurances.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @param {number} offset
 */
export function setPickupGlowOffset(pickupID: PickupIndex, offset: number): void {
	const setPickupGlowOffset_result = Citizen.invokeNative<void>('0xED6967E98C0B750B', pickupID, offset);
	return setPickupGlowOffset_result;
}