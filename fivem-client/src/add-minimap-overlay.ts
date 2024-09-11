/**
 * CFX:ADD_MINIMAP_OVERLAY
 *
 * 0X4AFD2499

 * Loads a minimap overlay from a GFx file in the current resource.If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#_0xED0935B5).
 * 
 * ------------------------------------------------------------------
 * @param {string} name The path to a .gfx file in the current resource. It has to be specified as a file.
 * @returns {number}  A minimap overlay ID.
 */
export function addMinimapOverlay(name: string): number {
	const addMinimapOverlay_result = Citizen.invokeNative<number>('0X4AFD2499', name);
	return addMinimapOverlay_result;
}