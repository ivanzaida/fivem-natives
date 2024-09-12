import { StringRef } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_DEDUCT_CASH
 *
 * 0x565823C8D4F7B64D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {StringRef} type [Ref]
 * @param {StringRef} reason [Ref]
 * @param {boolean} toBank
 * @param {boolean} fromBankAndWallet
 * @param {boolean} fromWalletAndBank
 */
export function networkDeductCash(amount: number, type: StringRef /* ptr */, reason: StringRef /* ptr */, toBank: boolean = false, fromBankAndWallet: boolean = false, fromWalletAndBank: boolean = false): void {
	const networkDeductCash_result = Citizen.invokeNative<void>('0x565823C8D4F7B64D', amount, type.dataView, reason.dataView, toBank, fromBankAndWallet, fromWalletAndBank);
	return networkDeductCash_result;
}