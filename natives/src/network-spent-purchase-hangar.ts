import { SpendHangar } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_HANGAR
 *
 * 0x26FCA81008B87FAF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendHangar} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseHangar(amount: number, data: SpendHangar /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseHangar_result = Citizen.invokeNative<void>('0x26FCA81008B87FAF', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseHangar_result;
}