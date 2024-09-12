/**
 * GRAPHICS:DISABLE_SCREENBLUR_FADE
 *
 * 0xD2D97A8EA35312E0

 * 
 * ------------------------------------------------------------------
 */
export function disableScreenblurFade(): void {
	const disableScreenblurFade_result = Citizen.invokeNative<void>('0xD2D97A8EA35312E0', );
	return disableScreenblurFade_result;
}