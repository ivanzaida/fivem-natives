import { AptUtilBreakdown } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_APARTMENT_UTILITIES
 *
 * 0xD00BC7FDBE039771

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {AptUtilBreakdown} data [Ref]
 */
export function networkSpendApartmentUtilities(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: AptUtilBreakdown /* ptr */): void {
	const networkSpendApartmentUtilities_result = Citizen.invokeNative<void>('0xD00BC7FDBE039771', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendApartmentUtilities_result;
}