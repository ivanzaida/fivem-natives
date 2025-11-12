/**
 * GRAPHICS:DRAW_RECT
 *
 * 0x81645EE95A114FAE

 * 
 * rects are drawn in order, with the laset rectangle  drawn on top.
 * 
 * Draws a rectangle on the screen.
 * 
 * -x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)
 * 
 * -y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)
 * 
 * -width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)
 * 
 * -height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)
 * 
 * -R: Red part of the color. (0-255)
 * 
 * -G: Green part of the color. (0-255)
 * 
 * -B: Blue part of the color. (0-255)
 * 
 * -A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)
 * 
 * The total number of rectangles to be drawn in one frame is apparently limited to 399.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} stereo
 */
export function drawRect(centreX: number, centreY: number, width: number, height: number, r: number, g: number, b: number, a: number, stereo: boolean = false): void {
	const drawRect_result = Citizen.invokeNative<void>('0x81645EE95A114FAE', centreX, centreY, width, height, r, g, b, a, stereo);
	return drawRect_result;
}