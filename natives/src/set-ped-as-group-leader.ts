import { PedIndex, GroupIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_AS_GROUP_LEADER
 *
 * 0xFF7B703047EDEC8F

 * 
 * The player is group leader of the players gropu and cannot be set leader of another gropu
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {GroupIndex} groupUniqueID
 */
export function setPedAsGroupLeader(ped: PedIndex, groupUniqueID: GroupIndex): void {
	const setPedAsGroupLeader_result = Citizen.invokeNative<void>('0xFF7B703047EDEC8F', ped, groupUniqueID);
	return setPedAsGroupLeader_result;
}