/**
 * CFX:HAS_MINIMAP_OVERLAY_LOADED
 *
 * 0xF7535F32

 * Returns whether or not the specific minimap overlay has loaded.
 * 
 * ------------------------------------------------------------------
 * @param {number} id A minimap overlay ID.
 * @returns {boolean}  A boolean indicating load status.
 */
export function hasMinimapOverlayLoaded(id: number): boolean {
	const hasMinimapOverlayLoaded_result = Citizen.invokeNative<boolean>('0xF7535F32', id);
	return hasMinimapOverlayLoaded_result;
}