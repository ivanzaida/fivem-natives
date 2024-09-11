import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:HIDE_PORTABLE_PICKUP_WHEN_DETACHED
 *
 * 0x6F7F646DA603F6DF

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} hide
 */
export function hidePortablePickupWhenDetached(pickupID: ObjectIndex, hide: boolean): void {
	const hidePortablePickupWhenDetached_result = Citizen.invokeNative<void>('0x6F7F646DA603F6DF', pickupID, hide);
	return hidePortablePickupWhenDetached_result;
}