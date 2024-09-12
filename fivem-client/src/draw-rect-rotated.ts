/**
 * CFX:DRAW_RECT_ROTATED
 *
 * 0xEC37C168

 * DRAW_RECT, but with a rotation. Seems to be broken.
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
export function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void {
	const drawRectRotated_result = Citizen.invokeNative<void>('0xEC37C168', x, y, width, height, rotation, r, g, b, a);
	return drawRectRotated_result;
}