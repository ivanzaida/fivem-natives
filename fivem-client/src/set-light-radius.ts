/**
 * CFX:SET_LIGHT_RADIUS
 *
 * 0x4A4B5CBE

 * Set the radius of a created light.
 * 
 * ------------------------------------------------------------------
 * @param {number} radius The radius value to set
 */
export function setLightRadius(radius: number): void {
	const setLightRadius_result = Citizen.invokeNative<void>('0x4A4B5CBE', radius);
	return setLightRadius_result;
}