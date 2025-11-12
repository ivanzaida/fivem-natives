/**
 * MISC:SHOULD_USE_METRIC_MEASUREMENTS
 *
 * 0x4721B5E26C8861C8

 * 
 * Returns true if the game is using the metric measurement system (profile setting 227), false if imperial is used.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function shouldUseMetricMeasurements(): boolean {
	const shouldUseMetricMeasurements_result = Citizen.invokeNative<boolean>('0x4721B5E26C8861C8', );
	return shouldUseMetricMeasurements_result;
}