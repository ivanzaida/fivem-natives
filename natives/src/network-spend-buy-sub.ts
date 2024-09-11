import { BuySub } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUY_SUB
 *
 * 0x4BEE133765D6015F

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BuySub} data [Ref]
 */
export function networkSpendBuySub(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BuySub /* ptr */): void {
	const networkSpendBuySub_result = Citizen.invokeNative<void>('0x4BEE133765D6015F', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBuySub_result;
}