/**
 * GRAPHICS:SEETHROUGH_SET_HIGHLIGHT_NOISE
 *
 * 0xD736F4EC169C0407

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetHighlightNoise(param: number): void {
	const seethroughSetHighlightNoise_result = Citizen.invokeNative<void>('0xD736F4EC169C0407', param);
	return seethroughSetHighlightNoise_result;
}