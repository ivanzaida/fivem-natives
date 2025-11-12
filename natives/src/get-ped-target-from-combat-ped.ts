import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_TARGET_FROM_COMBAT_PED
 *
 * 0x11330C43B3678209

 * 
 * Return the index of the target ped with which the ped is in combat with.
 * Allow for an optional LoS check to be enforced. Will return 0 if there is no target ped or if the ped is not in TASK_COMBAT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} forceLoSCheck
 * @returns {EntityIndex}  
 */
export function getPedTargetFromCombatPed(ped: PedIndex, forceLoSCheck: boolean = false): EntityIndex {
	const getPedTargetFromCombatPed_result = Citizen.invokeNative<EntityIndex>('0x11330C43B3678209', ped, forceLoSCheck);
	return getPedTargetFromCombatPed_result;
}