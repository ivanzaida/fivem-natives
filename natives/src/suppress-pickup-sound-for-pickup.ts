import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SUPPRESS_PICKUP_SOUND_FOR_PICKUP
 *
 * 0x70351229319C8FCB

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} suppress
 */
export function suppressPickupSoundForPickup(pickupID: ObjectIndex, suppress: boolean): void {
	const suppressPickupSoundForPickup_result = Citizen.invokeNative<void>('0x70351229319C8FCB', pickupID, suppress);
	return suppressPickupSoundForPickup_result;
}