/**
 * AUDIO:SET_PED_WALLA_DENSITY
 *
 * 0x30CC8BA35211A422

 * 
 * density -> Desired walla density
 * applyValue ->  How much the desired density affects the actual one.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} density
 * @param {number} applyValue
 */
export function setPedWallaDensity(density: number, applyValue: number): void {
	const setPedWallaDensity_result = Citizen.invokeNative<void>('0x30CC8BA35211A422', density, applyValue);
	return setPedWallaDensity_result;
}