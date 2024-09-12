/**
 * CFX:DRAW_LINE_2D
 *
 * 0XB856A90

 * Like DRAW_RECT, but it's a line.
 * 
 * ------------------------------------------------------------------
 * @param {number} x1 First x.
 * @param {number} y1 First y.
 * @param {number} x2 Second x.
 * @param {number} y2 Second y.
 * @param {number} width Width of line.
 * @param {number} r Red.
 * @param {number} g Green.
 * @param {number} b Blue.
 * @param {number} a Alpha.
 */
export function drawLine_2D(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void {
	const drawLine_2D_result = Citizen.invokeNative<void>('0XB856A90', x1, y1, x2, y2, width, r, g, b, a);
	return drawLine_2D_result;
}