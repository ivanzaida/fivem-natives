/**
 * HUD:ADD_TEXT_COMPONENT_INTEGER
 *
 * 0x511D14ED2DA887E1

 * 
 * ------------------------------------------------------------------
 * @param {number} integerToAdd
 */
export function addTextComponentInteger(integerToAdd: number): void {
	const addTextComponentInteger_result = Citizen.invokeNative<void>('0x511D14ED2DA887E1', integerToAdd);
	return addTextComponentInteger_result;
}