/**
 * CFX:SET_MINIMAP_OVERLAY_DISPLAY
 *
 * 0x6A48B3CA

 * Sets the display info for a minimap overlay.
 * 
 * ------------------------------------------------------------------
 * @param {number} miniMap The minimap overlay ID.
 * @param {number} x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param {number} y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = gameY).
 * @param {number} xScale The X scale for the overlay. This is equivalent to the Flash _xscale property, therefore 100 = 100%.
 * @param {number} yScale The Y scale for the overlay. This is equivalent to the Flash _yscale property.
 * @param {number} alpha The alpha value for the overlay. This is equivalent to the Flash _alpha property, therefore 100 = 100%.
 */
export function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void {
	const setMinimapOverlayDisplay_result = Citizen.invokeNative<void>('0x6A48B3CA', miniMap, x, y, xScale, yScale, alpha);
	return setMinimapOverlayDisplay_result;
}