/**
 * CFX:SET_LIGHT_FALLOFF
 *
 * 0x4D7F6E03

 * Adjust the falloff parameter for an existing light, affecting how light intensity decreases over distance.
 * 
 * ------------------------------------------------------------------
 * @param {number} falloff A floating‑point value determining the rate at which light intensity diminishes with distance (must be  0; values ≤ 0 will be clamped internally)
 */
export function setLightFalloff(falloff: number): void {
	const setLightFalloff_result = Citizen.invokeNative<void>('0x4D7F6E03', falloff);
	return setLightFalloff_result;
}