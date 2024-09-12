/**
 * GRAPHICS:SEETHROUGH_SET_COLOR_NEAR
 *
 * 0x37ED09D2BF486A04

 * 
 * ------------------------------------------------------------------
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
export function seethroughSetColorNear(r: number, g: number, b: number): void {
	const seethroughSetColorNear_result = Citizen.invokeNative<void>('0x37ED09D2BF486A04', r, g, b);
	return seethroughSetColorNear_result;
}