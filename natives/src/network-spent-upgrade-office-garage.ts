import { SpendOfficeGarage } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_OFFICE_GARAGE
 *
 * 0x835DCD1C2346F3E5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeGarage} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeOfficeGarage(amount: number, data: SpendOfficeGarage /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeOfficeGarage_result = Citizen.invokeNative<void>('0x835DCD1C2346F3E5', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeOfficeGarage_result;
}