/**
 * CFX:GET_PED_DENSITY_MULTIPLIER
 *
 * 0XF5A904F9

 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#_0x95E3D6257B166CF2).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns ped density multiplier value.
 */
export function getPedDensityMultiplier(): number {
	const getPedDensityMultiplier_result = Citizen.invokeNative<number>('0XF5A904F9', );
	return getPedDensityMultiplier_result;
}