import { GroupIndex, IntRef } from '@ivanzaida/structures'

/**
 * PED:GET_GROUP_SIZE
 *
 * 0xE6E9D3B5BEFF0EB3

 * 
 * p1 may be a BOOL representing whether or not the group even exists
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @param {IntRef} outHasLeader [Ref]
 * @param {IntRef} outNumberOfFollowers [Ref]
 */
export function getGroupSize(uniqueGroupID: GroupIndex, outHasLeader: IntRef /* ptr */, outNumberOfFollowers: IntRef /* ptr */): void {
	const getGroupSize_result = Citizen.invokeNative<void>('0xE6E9D3B5BEFF0EB3', uniqueGroupID, outHasLeader.dataView, outNumberOfFollowers.dataView);
	return getGroupSize_result;
}