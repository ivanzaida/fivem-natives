/**
 * GRAPHICS:DISABLE_OCCLUSION_THIS_FRAME
 *
 * 0x66AA5AE1BFE28CA0

 * 
 * ------------------------------------------------------------------
 */
export function disableOcclusionThisFrame(): void {
	const disableOcclusionThisFrame_result = Citizen.invokeNative<void>('0x66AA5AE1BFE28CA0', );
	return disableOcclusionThisFrame_result;
}