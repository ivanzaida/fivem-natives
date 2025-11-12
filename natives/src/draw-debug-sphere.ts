/**
 * GRAPHICS:DRAW_DEBUG_SPHERE
 *
 * 0x94DBB0363601E643

 * 
 * Call this command every frame. Only runs in dev and bank release. Requires script -> Draw Debug Lines And Spheres widget to be active.
 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} range
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawDebugSphere(coorsX: number, coorsY: number, coorsZ: number, range: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawDebugSphere_result = Citizen.invokeNative<void>('0x94DBB0363601E643', coorsX, coorsY, coorsZ, range, red, green, blue, alpha);
	return drawDebugSphere_result;
}