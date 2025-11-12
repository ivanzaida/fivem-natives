import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_BUY_BOUNTY
 *
 * 0x2E361871F6DBB0BB

 * 
 * p1 is just an assumption. p2 was false and p3 was true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {PlayerIndex} player
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkBuyBounty(amount: number, player: PlayerIndex, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkBuyBounty_result = Citizen.invokeNative<void>('0x2E361871F6DBB0BB', amount, player, fromBank, fromBankAndWallet, npcProvider);
	return networkBuyBounty_result;
}