import { GroupIndex, PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_AS_GROUP_MEMBER
 *
 * 0x619062CCF4C1D4D5

 * 
 * from fm_mission_controller.c4 (variable names changed for clarity):
 * 
 * int groupID = PLAYER::GET_PLAYER_GROUP(PLAYER::PLAYER_ID());
 * PED::GET_GROUP_SIZE(group, &unused, &groupSize);
 * if (groupSize >= 1) {
 * . . . . for (int memberNumber = 0; memberNumber < groupSize; memberNumber++) {
 * . . . . . . . . Ped ped1 = PED::GET_PED_AS_GROUP_MEMBER(groupID, memberNumber);
 * . . . . . . . . //and so on
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @param {number} memberNumber
 * @returns {PedIndex}  
 */
export function getPedAsGroupMember(uniqueGroupID: GroupIndex, memberNumber: number): PedIndex {
	const getPedAsGroupMember_result = Citizen.invokeNative<PedIndex>('0x619062CCF4C1D4D5', uniqueGroupID, memberNumber);
	return getPedAsGroupMember_result;
}