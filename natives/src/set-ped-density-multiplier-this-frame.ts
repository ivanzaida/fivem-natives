/**
 * PED:SET_PED_DENSITY_MULTIPLIER_THIS_FRAME
 *
 * 0xF9A2335AB37CF17E

 * 
 * ------------------------------------------------------------------
 * @param {number} densityMult
 */
export function setPedDensityMultiplierThisFrame(densityMult: number): void {
	const setPedDensityMultiplierThisFrame_result = Citizen.invokeNative<void>('0xF9A2335AB37CF17E', densityMult);
	return setPedDensityMultiplierThisFrame_result;
}