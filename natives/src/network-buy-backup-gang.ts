/**
 * MONEY:NETWORK_BUY_BACKUP_GANG
 *
 * 0x71D67D692ED4A77A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} gangType
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkBuyBackupGang(amount: number, gangType: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkBuyBackupGang_result = Citizen.invokeNative<void>('0x71D67D692ED4A77A', amount, gangType, fromBank, fromBankAndWallet, npcProvider);
	return networkBuyBackupGang_result;
}