/**
 * STATS:PLAYSTATS_SWITCH_PASSIVE_MODE
 *
 * 0xD3ABBB1A96756065

 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 * @param {number} source
 * @param {number} ghostedTo
 * @param {number} endReason
 */
export function playstatsSwitchPassiveMode(value: boolean, source: number, ghostedTo: number, endReason: number): void {
	const playstatsSwitchPassiveMode_result = Citizen.invokeNative<void>('0xD3ABBB1A96756065', value, source, ghostedTo, endReason);
	return playstatsSwitchPassiveMode_result;
}