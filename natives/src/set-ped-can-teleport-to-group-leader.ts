import { PedIndex, GroupIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_TELEPORT_TO_GROUP_LEADER
 *
 * 0x2D8E4004BC147E7E

 * 
 * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
 * 
 * Only works in singleplayer
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {GroupIndex} groupUniqueID
 * @param {boolean} enabled
 */
export function setPedCanTeleportToGroupLeader(ped: PedIndex, groupUniqueID: GroupIndex, enabled: boolean): void {
	const setPedCanTeleportToGroupLeader_result = Citizen.invokeNative<void>('0x2D8E4004BC147E7E', ped, groupUniqueID, enabled);
	return setPedCanTeleportToGroupLeader_result;
}