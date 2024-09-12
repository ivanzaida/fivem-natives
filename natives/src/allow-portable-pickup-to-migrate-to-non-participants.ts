import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:ALLOW_PORTABLE_PICKUP_TO_MIGRATE_TO_NON_PARTICIPANTS
 *
 * 0xB192A63C891A0E89

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} allow
 */
export function allowPortablePickupToMigrateToNonParticipants(pickupID: ObjectIndex, allow: boolean): void {
	const allowPortablePickupToMigrateToNonParticipants_result = Citizen.invokeNative<void>('0xB192A63C891A0E89', pickupID, allow);
	return allowPortablePickupToMigrateToNonParticipants_result;
}