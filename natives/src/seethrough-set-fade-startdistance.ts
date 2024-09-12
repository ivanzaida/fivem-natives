/**
 * GRAPHICS:SEETHROUGH_SET_FADE_STARTDISTANCE
 *
 * 0xB2F5BE72B0EC2DEE

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetFadeStartdistance(param: number): void {
	const seethroughSetFadeStartdistance_result = Citizen.invokeNative<void>('0xB2F5BE72B0EC2DEE', param);
	return seethroughSetFadeStartdistance_result;
}