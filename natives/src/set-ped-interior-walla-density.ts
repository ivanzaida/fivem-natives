/**
 * AUDIO:SET_PED_INTERIOR_WALLA_DENSITY
 *
 * 0x728E3CDB3B64DE89

 * 
 * density -> Desired walla density
 * applyValue ->  How much the desired density affects the actual one.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} density
 * @param {number} applyValue
 */
export function setPedInteriorWallaDensity(density: number, applyValue: number): void {
	const setPedInteriorWallaDensity_result = Citizen.invokeNative<void>('0x728E3CDB3B64DE89', density, applyValue);
	return setPedInteriorWallaDensity_result;
}