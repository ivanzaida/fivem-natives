/**
 * HUD:THEFEED_SHOW
 *
 * 0x8875527DD4E42C07

 * 
 * Displays loading screen tips, requires `THEFEED_AUTO_POST_GAMETIPS_ON` to be called beforehand.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedShow(): void {
	const thefeedShow_result = Citizen.invokeNative<void>('0x8875527DD4E42C07', );
	return thefeedShow_result;
}