import { BusinessUtilBreakdown } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUSINESS_PROPERTY_FEES
 *
 * 0xCF0625D5D2A8F298

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BusinessUtilBreakdown} data [Ref]
 */
export function networkSpendBusinessPropertyFees(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BusinessUtilBreakdown /* ptr */): void {
	const networkSpendBusinessPropertyFees_result = Citizen.invokeNative<void>('0xCF0625D5D2A8F298', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBusinessPropertyFees_result;
}