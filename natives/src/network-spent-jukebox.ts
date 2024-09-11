/**
 * MONEY:NETWORK_SPENT_JUKEBOX
 *
 * 0x4EFA5A2F877A4580

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} playlist
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentJukebox(amount: number, playlist: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentJukebox_result = Citizen.invokeNative<void>('0x4EFA5A2F877A4580', amount, playlist, fromBank, fromBankAndWallet);
	return networkSpentJukebox_result;
}