/**
 * CFX:GET_AMBIENT_PED_RANGE_MULTIPLIER
 *
 * 0XB550232D

 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#_0x0B919E1FB47CC4E0).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns ambient ped range multiplier value.
 */
export function getAmbientPedRangeMultiplier(): number {
	const getAmbientPedRangeMultiplier_result = Citizen.invokeNative<number>('0XB550232D', );
	return getAmbientPedRangeMultiplier_result;
}