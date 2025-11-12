/**
 * CAM:FORCE_CINEMATIC_RENDERING_THIS_UPDATE
 *
 * 0x48032DB198A2A820

 * 
 * If there is a cinematic camera rendering this cannot be overridden by the player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} activeThisFrame
 */
export function forceCinematicRenderingThisUpdate(activeThisFrame: boolean): void {
	const forceCinematicRenderingThisUpdate_result = Citizen.invokeNative<void>('0x48032DB198A2A820', activeThisFrame);
	return forceCinematicRenderingThisUpdate_result;
}