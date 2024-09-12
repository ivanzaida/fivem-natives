/**
 * CFX:APPLY_WEATHER_CYCLES
 *
 * 0X3422291C

 * 
 * ------------------------------------------------------------------
 * @param {number} numEntries The number of cycle entries. Must be between 1 and 256
 * @param {number} msPerCycle The duration in milliseconds of each cycle. Must be between 1000 and 86400000 (24 hours)
 * @returns {boolean}  Returns true if all parameters were valid, otherwise false.
 */
export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean {
	const applyWeatherCycles_result = Citizen.invokeNative<boolean>('0X3422291C', numEntries, msPerCycle);
	return applyWeatherCycles_result;
}