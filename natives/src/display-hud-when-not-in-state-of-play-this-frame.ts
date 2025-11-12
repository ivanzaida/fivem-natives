/**
 * HUD:DISPLAY_HUD_WHEN_NOT_IN_STATE_OF_PLAY_THIS_FRAME
 *
 * 0xDB1A0120CD3E3005

 * 
 * Enables drawing some hud components, such as help labels, this frame, when the player is dead.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function displayHudWhenNotInStateOfPlayThisFrame(): void {
	const displayHudWhenNotInStateOfPlayThisFrame_result = Citizen.invokeNative<void>('0xDB1A0120CD3E3005', );
	return displayHudWhenNotInStateOfPlayThisFrame_result;
}