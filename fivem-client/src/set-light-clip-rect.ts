/**
 * CFX:SET_LIGHT_CLIP_RECT
 *
 * 0xD9DD0717

 * Set the clip rectangle for a created light.
 * 
 * ------------------------------------------------------------------
 * @param {number} x The xcoordinate of the clip rectangle
 * @param {number} y The ycoordinate of the clip rectangle
 * @param {number} width The width of the clip rectangle
 * @param {number} height The height of the clip rectangle
 */
export function setLightClipRect(x: number, y: number, width: number, height: number): void {
	const setLightClipRect_result = Citizen.invokeNative<void>('0xD9DD0717', x, y, width, height);
	return setLightClipRect_result;
}