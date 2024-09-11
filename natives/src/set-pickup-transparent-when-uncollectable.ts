import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_TRANSPARENT_WHEN_UNCOLLECTABLE
 *
 * 0x4C053DEF00842DC9

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @param {boolean} set
 */
export function setPickupTransparentWhenUncollectable(pickupID: PickupIndex, set: boolean): void {
	const setPickupTransparentWhenUncollectable_result = Citizen.invokeNative<void>('0x4C053DEF00842DC9', pickupID, set);
	return setPickupTransparentWhenUncollectable_result;
}