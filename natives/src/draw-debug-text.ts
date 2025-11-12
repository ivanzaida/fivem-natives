/**
 * GRAPHICS:DRAW_DEBUG_TEXT
 *
 * 0x8B47D286AAC499D6

 * 
 * Call this command every frame. Only runs in dev and bank release. Requires script -> Draw Debug Lines And Spheres widget to be active.
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
export function drawDebugText(text: string, coorsX: number, coorsY: number, coorsZ: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawDebugText_result = Citizen.invokeNative<void>('0x8B47D286AAC499D6', text, coorsX, coorsY, coorsZ, red, green, blue, alpha);
	return drawDebugText_result;
}