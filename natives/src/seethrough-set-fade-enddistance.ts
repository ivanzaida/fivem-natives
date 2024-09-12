/**
 * GRAPHICS:SEETHROUGH_SET_FADE_ENDDISTANCE
 *
 * 0x223BF824658215CB

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetFadeEnddistance(param: number): void {
	const seethroughSetFadeEnddistance_result = Citizen.invokeNative<void>('0x223BF824658215CB', param);
	return seethroughSetFadeEnddistance_result;
}