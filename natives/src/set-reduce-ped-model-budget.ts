/**
 * STREAMING:SET_REDUCE_PED_MODEL_BUDGET
 *
 * 0x9E635675ADA39E95

 * 
 * If we are playing back then this loads the list and does
 * a load scene for the initial set of objects. If we are recording this initialises the record
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} reduce
 */
export function setReducePedModelBudget(reduce: boolean): void {
	const setReducePedModelBudget_result = Citizen.invokeNative<void>('0x9E635675ADA39E95', reduce);
	return setReducePedModelBudget_result;
}