/**
 * MONEY:NETWORK_SPEND_ARENA_SPECTATOR_BOX
 *
 * 0x5F6D2B7BA40483E7

 * 
 * type either, 1 for cam spectate, 2 for drone
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} itembought
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendArenaSpectatorBox(amount: number, itembought: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendArenaSpectatorBox_result = Citizen.invokeNative<void>('0x5F6D2B7BA40483E7', amount, itembought, fromBank, fromBankAndWallet);
	return networkSpendArenaSpectatorBox_result;
}