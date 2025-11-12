/**
 * STREAMING:SET_PED_POPULATION_BUDGET
 *
 * 0xAD9B1C8FED6B4D96

 * 
 * Set the memory budget level for ped population [0, 3] where  0 = lowest (no peds) and 3 = full budget
 * 
 * Control how many new (ambient?) peds will spawn in the game world.
 * Range for p0 seems to be 0-3, where 0 is none and 3 is the normal level.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} budgetLevel
 */
export function setPedPopulationBudget(budgetLevel: number): void {
	const setPedPopulationBudget_result = Citizen.invokeNative<void>('0xAD9B1C8FED6B4D96', budgetLevel);
	return setPedPopulationBudget_result;
}