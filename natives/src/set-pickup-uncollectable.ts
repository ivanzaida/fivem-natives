import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_UNCOLLECTABLE
 *
 * 0x9CA38BB13C29695F

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @param {boolean} set
 */
export function setPickupUncollectable(pickupID: PickupIndex, set: boolean): void {
	const setPickupUncollectable_result = Citizen.invokeNative<void>('0x9CA38BB13C29695F', pickupID, set);
	return setPickupUncollectable_result;
}