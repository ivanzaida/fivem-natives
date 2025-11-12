/**
 * GRAPHICS:DRAW_DEBUG_BOX
 *
 * 0xF16E78BBC716DB17

 * 
 * Call this command every frame. Only runs in dev and bank release. Requires script -> Draw Debug Lines And Spheres widget to be active.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsMinX
 * @param {number} coorsMinY
 * @param {number} coorsMinZ
 * @param {number} coorsMaxX
 * @param {number} coorsMaxY
 * @param {number} coorsMaxZ
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawDebugBox(coorsMinX: number, coorsMinY: number, coorsMinZ: number, coorsMaxX: number, coorsMaxY: number, coorsMaxZ: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawDebugBox_result = Citizen.invokeNative<void>('0xF16E78BBC716DB17', coorsMinX, coorsMinY, coorsMinZ, coorsMaxX, coorsMaxY, coorsMaxZ, red, green, blue, alpha);
	return drawDebugBox_result;
}