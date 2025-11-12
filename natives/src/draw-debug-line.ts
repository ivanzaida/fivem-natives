/**
 * GRAPHICS:DRAW_DEBUG_LINE
 *
 * 0x9E36887F0AA9DF6D

 * 
 * Call this command every frame. Only runs in dev and bank release. Requires script -> Draw Debug Lines And Spheres widget to be active.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsFirstX
 * @param {number} coorsFirstY
 * @param {number} coorsFirstZ
 * @param {number} coorsSecondX
 * @param {number} coorsSecondY
 * @param {number} coorsSecondZ
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawDebugLine(coorsFirstX: number, coorsFirstY: number, coorsFirstZ: number, coorsSecondX: number, coorsSecondY: number, coorsSecondZ: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawDebugLine_result = Citizen.invokeNative<void>('0x9E36887F0AA9DF6D', coorsFirstX, coorsFirstY, coorsFirstZ, coorsSecondX, coorsSecondY, coorsSecondZ, red, green, blue, alpha);
	return drawDebugLine_result;
}