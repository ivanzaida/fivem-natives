import { GroupIndex, EPedgroupFormation } from '@ivanzaida/structures'

/**
 * PED:SET_GROUP_FORMATION
 *
 * 0xDC80C872B18711B5

 * 
 * 0: Default
 * 1: Circle Around Leader
 * 2: Alternative Circle Around Leader
 * 3: Line, with Leader at center
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @param {EPedgroupFormation} groupFormation
 */
export function setGroupFormation(uniqueGroupID: GroupIndex, groupFormation: EPedgroupFormation | number): void {
	const setGroupFormation_result = Citizen.invokeNative<void>('0xDC80C872B18711B5', uniqueGroupID, groupFormation);
	return setGroupFormation_result;
}