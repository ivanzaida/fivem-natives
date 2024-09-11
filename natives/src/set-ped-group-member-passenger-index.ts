import { PedIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * PED:SET_PED_GROUP_MEMBER_PASSENGER_INDEX
 *
 * 0x412B9F2CF0E60079

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EVehicleSeat} seat
 */
export function setPedGroupMemberPassengerIndex(ped: PedIndex, seat: EVehicleSeat | number): void {
	const setPedGroupMemberPassengerIndex_result = Citizen.invokeNative<void>('0x412B9F2CF0E60079', ped, seat);
	return setPedGroupMemberPassengerIndex_result;
}