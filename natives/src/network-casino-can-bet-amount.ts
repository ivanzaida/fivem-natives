/**
 * MONEY:NETWORK_CASINO_CAN_BET_AMOUNT
 *
 * 0xA27607CE04D875E6

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {boolean}  
 */
export function networkCasinoCanBetAmount(amount: number): boolean {
	const networkCasinoCanBetAmount_result = Citizen.invokeNative<boolean>('0xA27607CE04D875E6', amount);
	return networkCasinoCanBetAmount_result;
}