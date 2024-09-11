/**
 * GRAPHICS:SEETHROUGH_SET_NOISE_MIN
 *
 * 0x8FC9D74BE81B474E

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetNoiseMin(param: number): void {
	const seethroughSetNoiseMin_result = Citizen.invokeNative<void>('0x8FC9D74BE81B474E', param);
	return seethroughSetNoiseMin_result;
}