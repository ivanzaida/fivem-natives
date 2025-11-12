/**
 * CFX:SET_LIGHT_ALPHA
 *
 * 0xC0EBC38

 * Set the alpha transparency of the light.
 * 
 * ------------------------------------------------------------------
 * @param {number} alpha The alpha transparency value (0.0 to 1.0)
 */
export function setLightAlpha(alpha: number): void {
	const setLightAlpha_result = Citizen.invokeNative<void>('0xC0EBC38', alpha);
	return setLightAlpha_result;
}