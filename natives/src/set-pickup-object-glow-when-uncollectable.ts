import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_OBJECT_GLOW_WHEN_UNCOLLECTABLE
 *
 * 0x15D82129216A84DC

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} set
 */
export function setPickupObjectGlowWhenUncollectable(pickupID: ObjectIndex, set: boolean = true): void {
	const setPickupObjectGlowWhenUncollectable_result = Citizen.invokeNative<void>('0x15D82129216A84DC', pickupID, set);
	return setPickupObjectGlowWhenUncollectable_result;
}