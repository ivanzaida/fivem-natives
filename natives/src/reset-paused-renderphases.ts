/**
 * GRAPHICS:RESET_PAUSED_RENDERPHASES
 *
 * 0x063FC71162B675A0

 * 
 * ------------------------------------------------------------------
 */
export function resetPausedRenderphases(): void {
	const resetPausedRenderphases_result = Citizen.invokeNative<void>('0x063FC71162B675A0', );
	return resetPausedRenderphases_result;
}