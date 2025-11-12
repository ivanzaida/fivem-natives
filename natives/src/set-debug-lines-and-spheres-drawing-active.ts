/**
 * GRAPHICS:SET_DEBUG_LINES_AND_SPHERES_DRAWING_ACTIVE
 *
 * 0x9C091F2E9354854A

 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setDebugLinesAndSpheresDrawingActive(active: boolean): void {
	const setDebugLinesAndSpheresDrawingActive_result = Citizen.invokeNative<void>('0x9C091F2E9354854A', active);
	return setDebugLinesAndSpheresDrawingActive_result;
}