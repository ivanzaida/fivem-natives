/**
 * GRAPHICS:DRAW_DEBUG_TEXT_2D
 *
 * 0xBBB7593C7244A846

 * 
 * This command draws to the screen game screen. The top left of the screen is 0,0 and the bottom right is 1,1. so all values should be bewteen these values.
 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} text
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawDebugText_2D(text: string, coorsX: number, coorsY: number, coorsZ: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawDebugText_2D_result = Citizen.invokeNative<void>('0xBBB7593C7244A846', text, coorsX, coorsY, coorsZ, red, green, blue, alpha);
	return drawDebugText_2D_result;
}