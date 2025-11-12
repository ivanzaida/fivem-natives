/**
 * HUD:CUSTOM_MINIMAP_SET_BLIP_OBJECT
 *
 * 0xBC6E3BF0E1E57442

 * 
 * Sets the sprite of the next BLIP_GALLERY blip, values used in the native scripts: 143 (ObjectiveBlue), 144 (ObjectiveGreen), 145 (ObjectiveRed), 146 (ObjectiveYellow).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 */
export function customMinimapSetBlipObject(index: number): void {
	const customMinimapSetBlipObject_result = Citizen.invokeNative<void>('0xBC6E3BF0E1E57442', index);
	return customMinimapSetBlipObject_result;
}