/**
 * HUD:THEFEED_HIDE
 *
 * 0xC5F6E5CC785FEC20

 * 
 * Stops loading screen tips shown by invoking `THEFEED_SHOW`
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedHide(): void {
	const thefeedHide_result = Citizen.invokeNative<void>('0xC5F6E5CC785FEC20', );
	return thefeedHide_result;
}