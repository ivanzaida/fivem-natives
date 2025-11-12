/**
 * GRAPHICS:DRAW_DEBUG_LINE_WITH_TWO_COLOURS
 *
 * 0x7B26600F66208BC6

 * 
 * Call this command every frame. Only runs in dev and bank release. Requires script -> Draw Debug Lines And Spheres widget to be active.
 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsFirstX
 * @param {number} coorsFirstY
 * @param {number} coorsFirstZ
 * @param {number} coorsSecondX
 * @param {number} coorsSecondY
 * @param {number} coorsSecondZ
 * @param {number} startRed
 * @param {number} startGreen
 * @param {number} startBlue
 * @param {number} startAlpha
 * @param {number} endRed
 * @param {number} endGreen
 * @param {number} endBlue
 * @param {number} endAlpha
 */
export function drawDebugLineWithTwoColours(coorsFirstX: number, coorsFirstY: number, coorsFirstZ: number, coorsSecondX: number, coorsSecondY: number, coorsSecondZ: number, startRed: number = 255, startGreen: number = 0, startBlue: number = 0, startAlpha: number = 255, endRed: number = 0, endGreen: number = 0, endBlue: number = 255, endAlpha: number = 255): void {
	const drawDebugLineWithTwoColours_result = Citizen.invokeNative<void>('0x7B26600F66208BC6', coorsFirstX, coorsFirstY, coorsFirstZ, coorsSecondX, coorsSecondY, coorsSecondZ, startRed, startGreen, startBlue, startAlpha, endRed, endGreen, endBlue, endAlpha);
	return drawDebugLineWithTwoColours_result;
}