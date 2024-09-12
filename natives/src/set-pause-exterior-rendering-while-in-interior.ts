/**
 * HUD:_SET_PAUSE_EXTERIOR_RENDERING_WHILE_IN_INTERIOR
 *
 * 0x35CCE12EAECB4A51

 * 
 * ------------------------------------------------------------------
 */
export function setPauseExteriorRenderingWhileInInterior(): void {
	const setPauseExteriorRenderingWhileInInterior_result = Citizen.invokeNative<void>('0x35CCE12EAECB4A51', );
	return setPauseExteriorRenderingWhileInInterior_result;
}