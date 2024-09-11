import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:ALLOW_PICKUP_BY_NONE_PARTICIPANT
 *
 * 0x3B4B7B1791F11CB8

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} allow
 */
export function allowPickupByNoneParticipant(pickupID: ObjectIndex, allow: boolean): void {
	const allowPickupByNoneParticipant_result = Citizen.invokeNative<void>('0x3B4B7B1791F11CB8', pickupID, allow);
	return allowPickupByNoneParticipant_result;
}