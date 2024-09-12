import { GroupIndex } from '@ivanzaida/structures'

/**
 * PED:DOES_GROUP_EXIST
 *
 * 0xDC469CE2BE7CE722

 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @returns {boolean}  
 */
export function doesGroupExist(uniqueGroupID: GroupIndex): boolean {
	const doesGroupExist_result = Citizen.invokeNative<boolean>('0xDC469CE2BE7CE722', uniqueGroupID);
	return doesGroupExist_result;
}