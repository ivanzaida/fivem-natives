import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_HIDDEN_WHEN_UNCOLLECTABLE
 *
 * 0xCDBF6DCBFC52E781

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @param {boolean} set
 */
export function setPickupHiddenWhenUncollectable(pickupID: PickupIndex, set: boolean): void {
	const setPickupHiddenWhenUncollectable_result = Citizen.invokeNative<void>('0xCDBF6DCBFC52E781', pickupID, set);
	return setPickupHiddenWhenUncollectable_result;
}