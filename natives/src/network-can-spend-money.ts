/**
 * MONEY:NETWORK_CAN_SPEND_MONEY
 *
 * 0x0AF5E4A6C74DC312

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {boolean} fromWalletAndBank
 * @param {number} character If the character is 1 it will use the current selected character.
 * @param {boolean} evcOnly
 * @returns {boolean}  
 */
export function networkCanSpendMoney(amount: number, fromBank: boolean, fromBankAndWallet: boolean, fromWalletAndBank: boolean, character: number = 1, evcOnly: boolean = false): boolean {
	const networkCanSpendMoney_result = Citizen.invokeNative<boolean>('0x0AF5E4A6C74DC312', amount, fromBank, fromBankAndWallet, fromWalletAndBank, character, evcOnly);
	return networkCanSpendMoney_result;
}