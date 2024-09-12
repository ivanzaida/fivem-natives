/**
 * CFX:SET_MINIMAP_CLIP_TYPE
 *
 * 0XB8B4490C

 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 * 
 * ------------------------------------------------------------------
 * @param {number} type 0 for rectangular, 1 for rounded.
 */
export function setMinimapClipType(type: number): void {
	const setMinimapClipType_result = Citizen.invokeNative<void>('0XB8B4490C', type);
	return setMinimapClipType_result;
}