import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_TRACK_DAMAGE_EVENTS
 *
 * 0xD0AE52F8786F9DDC

 * 
 * Unset it before trying to delete the pickup via the DELETE_ENTITY function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} set
 */
export function setPickupTrackDamageEvents(pickupID: ObjectIndex, set: boolean = true): void {
	const setPickupTrackDamageEvents_result = Citizen.invokeNative<void>('0xD0AE52F8786F9DDC', pickupID, set);
	return setPickupTrackDamageEvents_result;
}