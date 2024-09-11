import { PickupIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:ADD_PICKUP_TO_INTERIOR_ROOM_BY_NAME
 *
 * 0x57303BAC3E5DA035

 * 
 * ------------------------------------------------------------------
 * @param {PickupIndex} pickupID
 * @param {string} name
 */
export function addPickupToInteriorRoomByName(pickupID: PickupIndex, name: string): void {
	const addPickupToInteriorRoomByName_result = Citizen.invokeNative<void>('0x57303BAC3E5DA035', pickupID, name);
	return addPickupToInteriorRoomByName_result;
}