/**
 * GRAPHICS:SET_DISABLE_DECAL_RENDERING_THIS_FRAME
 *
 * 0xAF28608F1D388164

 * 
 * ------------------------------------------------------------------
 */
export function setDisableDecalRenderingThisFrame(): void {
	const setDisableDecalRenderingThisFrame_result = Citizen.invokeNative<void>('0xAF28608F1D388164', );
	return setDisableDecalRenderingThisFrame_result;
}