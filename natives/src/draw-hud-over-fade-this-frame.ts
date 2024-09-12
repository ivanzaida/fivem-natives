/**
 * HUD:DRAW_HUD_OVER_FADE_THIS_FRAME
 *
 * 0x91A048F886524873

 * 
 * ------------------------------------------------------------------
 */
export function drawHudOverFadeThisFrame(): void {
	const drawHudOverFadeThisFrame_result = Citizen.invokeNative<void>('0x91A048F886524873', );
	return drawHudOverFadeThisFrame_result;
}