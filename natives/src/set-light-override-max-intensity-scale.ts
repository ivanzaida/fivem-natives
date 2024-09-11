/**
 * GRAPHICS:SET_LIGHT_OVERRIDE_MAX_INTENSITY_SCALE
 *
 * 0xEC4B7DC773123827

 * 
 * ------------------------------------------------------------------
 * @param {number} maxIntensityScale
 */
export function setLightOverrideMaxIntensityScale(maxIntensityScale: number): void {
	const setLightOverrideMaxIntensityScale_result = Citizen.invokeNative<void>('0xEC4B7DC773123827', maxIntensityScale);
	return setLightOverrideMaxIntensityScale_result;
}