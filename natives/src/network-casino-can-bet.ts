/**
 * MONEY:NETWORK_CASINO_CAN_BET
 *
 * 0xA737C76A9908948A

 * 
 * casinogame must be != 0 - or it will return false. This checks evc availability.
 * 
 * GTAO_CASINO_HOUSE
 * GTAO_CASINO_INSIDETRACK
 * GTAO_CASINO_LUCKYWHEEL
 * GTAO_CASINO_BLACKJACK
 * GTAO_CASINO_ROULETTE
 * GTAO_CASINO_SLOTS
 * GTAO_CASINO_PURCHASE_CHIPS
 * 
 * NETWORK_C
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} casinogame
 * @returns {boolean}  
 */
export function networkCasinoCanBet(casinogame: number): boolean {
	const networkCasinoCanBet_result = Citizen.invokeNative<boolean>('0xA737C76A9908948A', casinogame);
	return networkCasinoCanBet_result;
}