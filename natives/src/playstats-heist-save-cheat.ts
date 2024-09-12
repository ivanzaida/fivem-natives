/**
 * STATS:PLAYSTATS_HEIST_SAVE_CHEAT
 *
 * 0x1D287C5DA2285371

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @param {number} secondValue
 */
export function playstatsHeistSaveCheat(value: number, secondValue: number = 0): void {
	const playstatsHeistSaveCheat_result = Citizen.invokeNative<void>('0x1D287C5DA2285371', value, secondValue);
	return playstatsHeistSaveCheat_result;
}