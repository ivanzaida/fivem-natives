/**
 * MONEY:NETWORK_CASINO_SELL_CHIPS
 *
 * 0x273A6B01207A9FE5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} chips
 * @returns {boolean}  
 */
export function networkCasinoSellChips(amount: number, chips: number): boolean {
	const networkCasinoSellChips_result = Citizen.invokeNative<boolean>('0x273A6B01207A9FE5', amount, chips);
	return networkCasinoSellChips_result;
}