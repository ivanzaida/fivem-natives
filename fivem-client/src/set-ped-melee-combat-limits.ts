/**
 * CFX:SET_PED_MELEE_COMBAT_LIMITS
 *
 * 0x8E51EC29

 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.This native infers the number of observers based on the primary and secondary counts.
 * 
 * ------------------------------------------------------------------
 * @param {number} primaryCount The number of peds that engage in combat (default
 * @param {number} secondaryCount The number of peds that engage in taunting (default
 * @param {number} populationPedCount The maximum number of population peds (ambient and scenario) that can engage in combat (default
 */
export function setPedMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void {
	const setPedMeleeCombatLimits_result = Citizen.invokeNative<void>('0x8E51EC29', primaryCount, secondaryCount, populationPedCount);
	return setPedMeleeCombatLimits_result;
}