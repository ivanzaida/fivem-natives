/**
 * VEHICLE:HAS_INSTANT_FILL_VEHICLE_POPULATION_FINISHED
 *
 * 0xEA02634993F717CE

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasInstantFillVehiclePopulationFinished(): boolean {
	const hasInstantFillVehiclePopulationFinished_result = Citizen.invokeNative<boolean>('0xEA02634993F717CE', );
	return hasInstantFillVehiclePopulationFinished_result;
}