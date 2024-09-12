import { PedIndex, GroupIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_AS_GROUP_MEMBER
 *
 * 0x03AB73582A77DBD3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {GroupIndex} groupUniqueID
 */
export function setPedAsGroupMember(ped: PedIndex, groupUniqueID: GroupIndex): void {
	const setPedAsGroupMember_result = Citizen.invokeNative<void>('0x03AB73582A77DBD3', ped, groupUniqueID);
	return setPedAsGroupMember_result;
}