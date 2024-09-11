/**
 * HUD:DISABLE_FRONTEND_THIS_FRAME
 *
 * 0x6C978B200DAA54DE

 * 
 * ------------------------------------------------------------------
 */
export function disableFrontendThisFrame(): void {
	const disableFrontendThisFrame_result = Citizen.invokeNative<void>('0x6C978B200DAA54DE', );
	return disableFrontendThisFrame_result;
}