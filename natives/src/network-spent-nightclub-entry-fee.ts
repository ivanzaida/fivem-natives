import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_NIGHTCLUB_ENTRY_FEE
 *
 * 0x75BD55E6AB869CAF

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} entryType
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentNightclubEntryFee(player: PlayerIndex, entryType: number, amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentNightclubEntryFee_result = Citizen.invokeNative<void>('0x75BD55E6AB869CAF', player, entryType, amount, fromBank, fromBankAndWallet);
	return networkSpentNightclubEntryFee_result;
}