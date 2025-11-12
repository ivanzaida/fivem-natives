/**
 * CFX:SET_LIGHT_INTENSITY
 *
 * 0x2CC9A71C

 * Set the intensity of an existing light.
 * 
 * ------------------------------------------------------------------
 * @param {number} intensity The intensity value to set
 */
export function setLightIntensity(intensity: number): void {
	const setLightIntensity_result = Citizen.invokeNative<void>('0x2CC9A71C', intensity);
	return setLightIntensity_result;
}