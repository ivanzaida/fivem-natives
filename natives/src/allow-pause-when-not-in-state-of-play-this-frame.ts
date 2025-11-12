/**
 * HUD:ALLOW_PAUSE_WHEN_NOT_IN_STATE_OF_PLAY_THIS_FRAME
 *
 * 0x2AF77E50375C922F

 * 
 * Allows opening the pause menu this frame, when the player is dead.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function allowPauseWhenNotInStateOfPlayThisFrame(): void {
	const allowPauseWhenNotInStateOfPlayThisFrame_result = Citizen.invokeNative<void>('0x2AF77E50375C922F', );
	return allowPauseWhenNotInStateOfPlayThisFrame_result;
}