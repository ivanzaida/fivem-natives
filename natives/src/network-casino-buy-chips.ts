/**
 * MONEY:NETWORK_CASINO_BUY_CHIPS
 *
 * 0x265D164F770DA9AB

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} chips
 * @returns {boolean}  
 */
export function networkCasinoBuyChips(amount: number, chips: number): boolean {
	const networkCasinoBuyChips_result = Citizen.invokeNative<boolean>('0x265D164F770DA9AB', amount, chips);
	return networkCasinoBuyChips_result;
}