/**
 * GRAPHICS:SEETHROUGH_SET_NOISE_MAX
 *
 * 0x32A8433C67882382

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetNoiseMax(param: number): void {
	const seethroughSetNoiseMax_result = Citizen.invokeNative<void>('0x32A8433C67882382', param);
	return seethroughSetNoiseMax_result;
}