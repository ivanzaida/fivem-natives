import { BuySub } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_UPGRADE_SUB
 *
 * 0xE285C20435466381

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BuySub} data [Ref]
 */
export function networkSpendUpgradeSub(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BuySub /* ptr */): void {
	const networkSpendUpgradeSub_result = Citizen.invokeNative<void>('0xE285C20435466381', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendUpgradeSub_result;
}