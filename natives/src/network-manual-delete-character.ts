/**
 * MONEY:NETWORK_MANUAL_DELETE_CHARACTER
 *
 * 0x017137CFD42927BA

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 */
export function networkManualDeleteCharacter(character: number): void {
	const networkManualDeleteCharacter_result = Citizen.invokeNative<void>('0x017137CFD42927BA', character);
	return networkManualDeleteCharacter_result;
}