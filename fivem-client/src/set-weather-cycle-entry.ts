/**
 * CFX:SET_WEATHER_CYCLE_ENTRY
 *
 * 0xD264D4E1

 * 
 * ------------------------------------------------------------------
 * @param {number} index The index of the entry to set. Must be between 0 and 255
 * @param {string} typeName The name of the weather type for this cycle
 * @param {number} timeMult The relative duration of this cycle, which is multiplied by msPerCycle during ['APPLY_WEATHER_CYCLES'](_0x3422291C). Must be between 1 and 255
 * @returns {boolean}  Returns true if all parameters were valid, otherwise false.
 */
export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean {
	const setWeatherCycleEntry_result = Citizen.invokeNative<boolean>('0xD264D4E1', index, typeName, timeMult);
	return setWeatherCycleEntry_result;
}