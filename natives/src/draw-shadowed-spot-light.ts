/**
 * GRAPHICS:DRAW_SHADOWED_SPOT_LIGHT
 *
 * 0x2037C6627E628A1B

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} directionX
 * @param {number} directionY
 * @param {number} directionZ
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} falloff
 * @param {number} intensity
 * @param {number} innerAngle
 * @param {number} outerAngle
 * @param {number} exp
 * @param {number} lightNum
 */
export function drawShadowedSpotLight(coorsX: number, coorsY: number, coorsZ: number, directionX: number, directionY: number, directionZ: number, r: number, g: number, b: number, falloff: number, intensity: number, innerAngle: number, outerAngle: number, exp: number, lightNum: number): void {
	const drawShadowedSpotLight_result = Citizen.invokeNative<void>('0x2037C6627E628A1B', coorsX, coorsY, coorsZ, directionX, directionY, directionZ, r, g, b, falloff, intensity, innerAngle, outerAngle, exp, lightNum);
	return drawShadowedSpotLight_result;
}