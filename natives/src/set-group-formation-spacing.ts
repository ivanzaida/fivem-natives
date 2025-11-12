import { GroupIndex } from '@ivanzaida/structures'

/**
 * PED:SET_GROUP_FORMATION_SPACING
 *
 * 0x47F8464BB13E408D

 * 
 * It is only valid for one script to do this at a time!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 * @param {number} spacing
 * @param {number} adjustSpeedMinDist Distance from spacing position at which ped slows down (leave at 1.0 if not sure)
 * @param {number} adjustSpeedMaxDist Distance from spacing position at which ped speeds up (leave at 1.0 if not sure)
 */
export function setGroupFormationSpacing(uniqueGroupID: GroupIndex, spacing: number, adjustSpeedMinDist: number = 1, adjustSpeedMaxDist: number = 1): void {
	const setGroupFormationSpacing_result = Citizen.invokeNative<void>('0x47F8464BB13E408D', uniqueGroupID, spacing, adjustSpeedMinDist, adjustSpeedMaxDist);
	return setGroupFormationSpacing_result;
}