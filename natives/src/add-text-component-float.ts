/**
 * HUD:ADD_TEXT_COMPONENT_FLOAT
 *
 * 0x7DCF91CE9137DE0E

 * 
 * ------------------------------------------------------------------
 * @param {number} floatToAdd
 * @param {number} numberOfDecimalPlaces
 */
export function addTextComponentFloat(floatToAdd: number, numberOfDecimalPlaces: number): void {
	const addTextComponentFloat_result = Citizen.invokeNative<void>('0x7DCF91CE9137DE0E', floatToAdd, numberOfDecimalPlaces);
	return addTextComponentFloat_result;
}