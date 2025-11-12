/**
 * HUD:THEFEED_FORCE_RENDER_OFF
 *
 * 0x6B4FEC23A5AD2DC0

 * 
 * Enables loading screen tips to be be shown (`THEFEED_SHOW`), blocks other kinds of notifications from being displayed (at least from current script). Call `0xADED7F5748ACAFE6` to display those again.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedForceRenderOff(): void {
	const thefeedForceRenderOff_result = Citizen.invokeNative<void>('0x6B4FEC23A5AD2DC0', );
	return thefeedForceRenderOff_result;
}