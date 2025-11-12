import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_OBJECT_GLOW_OFFSET
 *
 * 0x1EFD0C969D7EC8A5

 * 
 * p1 is always -0.2 in scripts and p2 is always true in scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {number} offset
 * @param {boolean} set
 */
export function setPickupObjectGlowOffset(pickupID: ObjectIndex, offset: number, set: boolean = true): void {
	const setPickupObjectGlowOffset_result = Citizen.invokeNative<void>('0x1EFD0C969D7EC8A5', pickupID, offset, set);
	return setPickupObjectGlowOffset_result;
}