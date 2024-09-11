import { PedIndex, GroupIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_GROUP_MEMBER
 *
 * 0xD11A63E12F198FDB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {GroupIndex} uniqueGroupID
 * @returns {boolean}  
 */
export function isPedGroupMember(ped: PedIndex, uniqueGroupID: GroupIndex): boolean {
	const isPedGroupMember_result = Citizen.invokeNative<boolean>('0xD11A63E12F198FDB', ped, uniqueGroupID);
	return isPedGroupMember_result;
}