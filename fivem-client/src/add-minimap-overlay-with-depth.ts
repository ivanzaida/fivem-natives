/**
 * CFX:ADD_MINIMAP_OVERLAY_WITH_DEPTH
 *
 * 0XED0935B5

 * Loads a minimap overlay from a GFx file in the current resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} name The path to a .gfx file in the current resource. It has to be specified as a file.
 * @param {number} depth The depth of new overlay on the minimap. Pass 1 for game to figure out the highest depth itself. Should not be greater than 0x7EFFFFFD.
 * @returns {number}  A minimap overlay ID.
 */
export function addMinimapOverlayWithDepth(name: string, depth: number): number {
	const addMinimapOverlayWithDepth_result = Citizen.invokeNative<number>('0XED0935B5', name, depth);
	return addMinimapOverlayWithDepth_result;
}