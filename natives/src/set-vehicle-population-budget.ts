/**
 * STREAMING:SET_VEHICLE_POPULATION_BUDGET
 *
 * 0x283C0970282AA5F3

 * 
 * Set the memory budget level for vehicle population [0, 3] where  0 = lowest (no cars) and 3 = full budget
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} budgetLevel
 */
export function setVehiclePopulationBudget(budgetLevel: number): void {
	const setVehiclePopulationBudget_result = Citizen.invokeNative<void>('0x283C0970282AA5F3', budgetLevel);
	return setVehiclePopulationBudget_result;
}