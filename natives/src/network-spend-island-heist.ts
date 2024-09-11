import { SpendIslandHeist } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_ISLAND_HEIST
 *
 * 0xDCA98A271D0CC516

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpendIslandHeist} data [Ref]
 */
export function networkSpendIslandHeist(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpendIslandHeist /* ptr */): void {
	const networkSpendIslandHeist_result = Citizen.invokeNative<void>('0xDCA98A271D0CC516', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendIslandHeist_result;
}