import { BuyAgency } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_UPGRADE_AGENCY
 *
 * 0x5EFF344D2CEF49DE

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BuyAgency} data [Ref]
 */
export function networkSpendUpgradeAgency(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BuyAgency /* ptr */): void {
	const networkSpendUpgradeAgency_result = Citizen.invokeNative<void>('0x5EFF344D2CEF49DE', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendUpgradeAgency_result;
}