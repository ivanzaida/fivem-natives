import { GroupIndex, PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_AS_GROUP_LEADER
 *
 * 0x6814C7F2C075A4F3

 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @returns {PedIndex}  
 */
export function getPedAsGroupLeader(uniqueGroupID: GroupIndex): PedIndex {
	const getPedAsGroupLeader_result = Citizen.invokeNative<PedIndex>('0x6814C7F2C075A4F3', uniqueGroupID);
	return getPedAsGroupLeader_result;
}