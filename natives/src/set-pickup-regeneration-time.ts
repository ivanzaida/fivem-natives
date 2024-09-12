import { PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_REGENERATION_TIME
 *
 * 0xE611C8912D834299

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @param {number} regenTime
 */
export function setPickupRegenerationTime(pickupID: PickupIndex, regenTime: number): void {
	const setPickupRegenerationTime_result = Citizen.invokeNative<void>('0xE611C8912D834299', pickupID, regenTime);
	return setPickupRegenerationTime_result;
}