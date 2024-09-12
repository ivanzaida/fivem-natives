import { SpentOnCasino } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_UPGRADE_CASINO
 *
 * 0xC28FC39C693BF50B

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnCasino} data [Ref]
 */
export function networkSpendUpgradeCasino(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnCasino /* ptr */): void {
	const networkSpendUpgradeCasino_result = Citizen.invokeNative<void>('0xC28FC39C693BF50B', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendUpgradeCasino_result;
}