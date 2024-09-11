import { SpentOnBase } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_BUY_BASE
 *
 * 0x6AAECCF5BAF1E393

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnBase} data [Ref]
 */
export function networkSpentBuyBase(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnBase /* ptr */): void {
	const networkSpentBuyBase_result = Citizen.invokeNative<void>('0x6AAECCF5BAF1E393', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentBuyBase_result;
}