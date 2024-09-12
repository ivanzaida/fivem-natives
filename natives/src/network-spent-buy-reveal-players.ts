/**
 * MONEY:NETWORK_SPENT_BUY_REVEAL_PLAYERS
 *
 * 0x38B36DE4A0DD8551

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentBuyRevealPlayers(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentBuyRevealPlayers_result = Citizen.invokeNative<void>('0x38B36DE4A0DD8551', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentBuyRevealPlayers_result;
}