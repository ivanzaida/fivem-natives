import { GroupIndex } from '@ivanzaida/structures'

/**
 * PED:REMOVE_GROUP
 *
 * 0x94CC4CA44256FDCB

 * 
 * If the its the players group it removes all the followers
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 */
export function removeGroup(uniqueGroupID: GroupIndex): void {
	const removeGroup_result = Citizen.invokeNative<void>('0x94CC4CA44256FDCB', uniqueGroupID);
	return removeGroup_result;
}