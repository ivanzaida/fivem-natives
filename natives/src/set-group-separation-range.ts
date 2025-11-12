import { GroupIndex } from '@ivanzaida/structures'

/**
 * PED:SET_GROUP_SEPARATION_RANGE
 *
 * 0x316802E03D8923D8

 * 
 * Sets the range at which members will automatically leave the group.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @param {number} separationRange
 */
export function setGroupSeparationRange(uniqueGroupID: GroupIndex, separationRange: number): void {
	const setGroupSeparationRange_result = Citizen.invokeNative<void>('0x316802E03D8923D8', uniqueGroupID, separationRange);
	return setGroupSeparationRange_result;
}