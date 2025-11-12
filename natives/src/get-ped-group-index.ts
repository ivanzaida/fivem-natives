import { PedIndex, GroupIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_GROUP_INDEX
 *
 * 0x26B246D60FABB3E2

 * 
 * Returns the group id of which the specified ped is a member of.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {GroupIndex}  
 */
export function getPedGroupIndex(ped: PedIndex): GroupIndex {
	const getPedGroupIndex_result = Citizen.invokeNative<GroupIndex>('0x26B246D60FABB3E2', ped);
	return getPedGroupIndex_result;
}