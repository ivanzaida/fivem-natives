/**
 * PED:REMOVE_SCENARIO_BLOCKING_AREAS
 *
 * 0x830C51B62E7CD5B2

 * 
 * ------------------------------------------------------------------
 */
export function removeScenarioBlockingAreas(): void {
	const removeScenarioBlockingAreas_result = Citizen.invokeNative<void>('0x830C51B62E7CD5B2', );
	return removeScenarioBlockingAreas_result;
}