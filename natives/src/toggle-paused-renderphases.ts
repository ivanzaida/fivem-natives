/**
 * GRAPHICS:TOGGLE_PAUSED_RENDERPHASES
 *
 * 0xDD98B34A4A3AFA89

 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function togglePausedRenderphases(on: boolean): void {
	const togglePausedRenderphases_result = Citizen.invokeNative<void>('0xDD98B34A4A3AFA89', on);
	return togglePausedRenderphases_result;
}