import { IntRef } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_CAN_SPEND_MONEY2
 *
 * 0xF299749D63CC7167

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {boolean} fromWalletAndBank
 * @param {IntRef} diff [Ref]
 * @param {number} character
 * @param {boolean} evcOnly
 * @returns {boolean}  
 */
export function networkCanSpendMoney2(amount: number, fromBank: boolean, fromBankAndWallet: boolean, fromWalletAndBank: boolean, diff: IntRef /* ptr */, character: number = 1, evcOnly: boolean = false): boolean {
	const networkCanSpendMoney2_result = Citizen.invokeNative<boolean>('0xF299749D63CC7167', amount, fromBank, fromBankAndWallet, fromWalletAndBank, diff.dataView, character, evcOnly);
	return networkCanSpendMoney2_result;
}