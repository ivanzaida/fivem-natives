import { SpentOnCasino } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUY_CASINO
 *
 * 0xD85A55A2B60E86C9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnCasino} data [Ref]
 */
export function networkSpendBuyCasino(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnCasino /* ptr */): void {
	const networkSpendBuyCasino_result = Citizen.invokeNative<void>('0xD85A55A2B60E86C9', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBuyCasino_result;
}