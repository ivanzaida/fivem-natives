/**
 * INTERIOR:CLEAR_ROOM_FOR_GAME_VIEWPORT
 *
 * 0xCC3ADBA41991FF4E

 * 
 * ------------------------------------------------------------------
 */
export function clearRoomForGameViewport(): void {
	const clearRoomForGameViewport_result = Citizen.invokeNative<void>('0xCC3ADBA41991FF4E', );
	return clearRoomForGameViewport_result;
}