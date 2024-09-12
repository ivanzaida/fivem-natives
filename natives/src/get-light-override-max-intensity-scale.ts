/**
 * GRAPHICS:GET_LIGHT_OVERRIDE_MAX_INTENSITY_SCALE
 *
 * 0xB891D572748D432C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getLightOverrideMaxIntensityScale(): number {
	const getLightOverrideMaxIntensityScale_result = Citizen.invokeNative<number>('0xB891D572748D432C', );
	return getLightOverrideMaxIntensityScale_result;
}