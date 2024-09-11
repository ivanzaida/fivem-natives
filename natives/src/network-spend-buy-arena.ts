import { SpentOnArena } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUY_ARENA
 *
 * 0x0DAFEB0418AF8DAF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnArena} data [Ref]
 */
export function networkSpendBuyArena(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnArena /* ptr */): void {
	const networkSpendBuyArena_result = Citizen.invokeNative<void>('0x0DAFEB0418AF8DAF', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBuyArena_result;
}