/**
 * GRAPHICS:DRAW_LIGHT_WITH_RANGEEX
 *
 * 0x0AD7E30D4E0D1254

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} range
 * @param {number} intensity
 * @param {number} falloffExponent
 */
export function drawLightWithRangeex(coorsX: number, coorsY: number, coorsZ: number, r: number, g: number, b: number, range: number, intensity: number, falloffExponent: number): void {
	const drawLightWithRangeex_result = Citizen.invokeNative<void>('0x0AD7E30D4E0D1254', coorsX, coorsY, coorsZ, r, g, b, range, intensity, falloffExponent);
	return drawLightWithRangeex_result;
}