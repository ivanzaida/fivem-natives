/**
 * GRAPHICS:DRAW_DEBUG_CROSS
 *
 * 0x5A0030BCCECA3297

 * 
 * Call this command every frame. Only runs in dev and bank release. Requires script -> Draw Debug Lines And Spheres widget to be active.
 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsMinX
 * @param {number} coorsMinY
 * @param {number} coorsMinZ
 * @param {number} size
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawDebugCross(coorsMinX: number, coorsMinY: number, coorsMinZ: number, size: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawDebugCross_result = Citizen.invokeNative<void>('0x5A0030BCCECA3297', coorsMinX, coorsMinY, coorsMinZ, size, red, green, blue, alpha);
	return drawDebugCross_result;
}