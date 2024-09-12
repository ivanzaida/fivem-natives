/**
 * MONEY:NETWORK_SPENT_ARENA_JOIN_SPECTATOR
 *
 * 0x6AE6C5324BD6DEBD

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} entryId
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentArenaJoinSpectator(amount: number, entryId: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentArenaJoinSpectator_result = Citizen.invokeNative<void>('0x6AE6C5324BD6DEBD', amount, entryId, fromBank, fromBankAndWallet);
	return networkSpentArenaJoinSpectator_result;
}