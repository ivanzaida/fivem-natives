import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_OBJECT_TRANSPARENT_WHEN_UNCOLLECTABLE
 *
 * 0x08EC1AE8FE5E74E2

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} set
 */
export function setPickupObjectTransparentWhenUncollectable(pickupID: ObjectIndex, set: boolean): void {
	const setPickupObjectTransparentWhenUncollectable_result = Citizen.invokeNative<void>('0x08EC1AE8FE5E74E2', pickupID, set);
	return setPickupObjectTransparentWhenUncollectable_result;
}