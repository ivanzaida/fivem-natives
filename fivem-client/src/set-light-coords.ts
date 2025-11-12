/**
 * CFX:SET_LIGHT_COORDS
 *
 * 0x8950BD08

 * Set the world coordinates of a specified light.
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 * @param {number} z The Z coordinate
 */
export function setLightCoords(x: number, y: number, z: number): void {
	const setLightCoords_result = Citizen.invokeNative<void>('0x8950BD08', x, y, z);
	return setLightCoords_result;
}