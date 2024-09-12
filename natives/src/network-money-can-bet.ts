/**
 * MONEY:NETWORK_MONEY_CAN_BET
 *
 * 0x098F030F49971616

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} bankOnly
 * @param {boolean} bankAndWallet
 * @returns {boolean}  
 */
export function networkMoneyCanBet(amount: number, bankOnly: boolean, bankAndWallet: boolean): boolean {
	const networkMoneyCanBet_result = Citizen.invokeNative<boolean>('0x098F030F49971616', amount, bankOnly, bankAndWallet);
	return networkMoneyCanBet_result;
}