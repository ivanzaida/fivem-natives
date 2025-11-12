/**
 * CFX:SET_LIGHT_VOLUMETRIC_FADE_DISTANCE
 *
 * 0xE1F41605

 * Set the fade distance for volumetric lightingn.
 * 
 * ------------------------------------------------------------------
 * @param {number} volumetricFadeDistance The maximum distance
 */
export function setLightVolumetricFadeDistance(volumetricFadeDistance: number): void {
	const setLightVolumetricFadeDistance_result = Citizen.invokeNative<void>('0xE1F41605', volumetricFadeDistance);
	return setLightVolumetricFadeDistance_result;
}