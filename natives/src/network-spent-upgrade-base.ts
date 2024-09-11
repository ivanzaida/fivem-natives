import { SpentOnBase } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_BASE
 *
 * 0x514D80B09AEE6358

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnBase} data [Ref]
 */
export function networkSpentUpgradeBase(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnBase /* ptr */): void {
	const networkSpentUpgradeBase_result = Citizen.invokeNative<void>('0x514D80B09AEE6358', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentUpgradeBase_result;
}