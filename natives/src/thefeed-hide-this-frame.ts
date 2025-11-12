/**
 * HUD:THEFEED_HIDE_THIS_FRAME
 *
 * 0x0C9B2F8C2BD128C2

 * 
 * Once called each frame hides all above radar notifications.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedHideThisFrame(): void {
	const thefeedHideThisFrame_result = Citizen.invokeNative<void>('0x0C9B2F8C2BD128C2', );
	return thefeedHideThisFrame_result;
}