import { BuyAgency } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUY_AGENCY
 *
 * 0x901A291369C59088

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BuyAgency} data [Ref]
 */
export function networkSpendBuyAgency(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BuyAgency /* ptr */): void {
	const networkSpendBuyAgency_result = Citizen.invokeNative<void>('0x901A291369C59088', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBuyAgency_result;
}