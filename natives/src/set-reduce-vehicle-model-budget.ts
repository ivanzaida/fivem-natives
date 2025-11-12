/**
 * STREAMING:SET_REDUCE_VEHICLE_MODEL_BUDGET
 *
 * 0xD81FEE0302584F60

 * 
 * For certain multiplayer missions, is good for deathmatches and such.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} reduce
 */
export function setReduceVehicleModelBudget(reduce: boolean): void {
	const setReduceVehicleModelBudget_result = Citizen.invokeNative<void>('0xD81FEE0302584F60', reduce);
	return setReduceVehicleModelBudget_result;
}