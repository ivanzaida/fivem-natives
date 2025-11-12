/**
 * HUD:HIDE_LOADING_ON_FADE_THIS_FRAME
 *
 * 0x6B91FA4E397DAB8D

 * 
 * Must be called every frame
 * 
 * 
 * ------------------------------------------------------------------
 */
export function hideLoadingOnFadeThisFrame(): void {
	const hideLoadingOnFadeThisFrame_result = Citizen.invokeNative<void>('0x6B91FA4E397DAB8D', );
	return hideLoadingOnFadeThisFrame_result;
}