/**
 * GRAPHICS:GOLF_TRAIL_SET_FIXED_CONTROL_POINT
 *
 * 0x4081B44AA3E3FAD3

 * 
 * 12 matches across 4 scripts. All 4 scripts were job creators.
 * 
 * type ranged from 0 - 2.
 * p4 was always 0.2f. Likely scale.
 * assuming p5 - p8 is RGBA, the graphic is always yellow (255, 255, 0, 255).
 * 
 * Tested but noticed nothing.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} controlPoint
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} radius
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
export function golfTrailSetFixedControlPoint(controlPoint: number, positionX: number, positionY: number, positionZ: number, radius: number, r: number, g: number, b: number, a: number): void {
	const golfTrailSetFixedControlPoint_result = Citizen.invokeNative<void>('0x4081B44AA3E3FAD3', controlPoint, positionX, positionY, positionZ, radius, r, g, b, a);
	return golfTrailSetFixedControlPoint_result;
}