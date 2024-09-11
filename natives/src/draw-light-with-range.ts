/**
 * GRAPHICS:DRAW_LIGHT_WITH_RANGE
 *
 * 0x748651DF4DA0A890

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
 */
export function drawLightWithRange(coorsX: number, coorsY: number, coorsZ: number, r: number, g: number, b: number, range: number, intensity: number): void {
	const drawLightWithRange_result = Citizen.invokeNative<void>('0x748651DF4DA0A890', coorsX, coorsY, coorsZ, r, g, b, range, intensity);
	return drawLightWithRange_result;
}