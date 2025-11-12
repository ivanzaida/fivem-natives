/**
 * CFX:SET_LIGHT_AO
 *
 * 0xE155B53B

 * Set ambient occlusion (AO) parameters for a specified light.
 * 
 * ------------------------------------------------------------------
 * @param {number} intensity The AO intensity
 * @param {number} radius The AO radius
 * @param {number} bias The AO bias
 * @param {number} intensity2 Secondary AO intensity
 */
export function setLightAo(intensity: number, radius: number, bias: number, intensity2: number): void {
	const setLightAo_result = Citizen.invokeNative<void>('0xE155B53B', intensity, radius, bias, intensity2);
	return setLightAo_result;
}