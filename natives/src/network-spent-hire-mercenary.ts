/**
 * MONEY:NETWORK_SPENT_HIRE_MERCENARY
 *
 * 0x3805A7764BBF4986

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentHireMercenary(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentHireMercenary_result = Citizen.invokeNative<void>('0x3805A7764BBF4986', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentHireMercenary_result;
}