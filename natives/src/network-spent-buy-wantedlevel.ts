import { GamerHandle } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_BUY_WANTEDLEVEL
 *
 * 0xA8C662E16DC4030E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {GamerHandle} handle [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentBuyWantedlevel(amount: number, handle: GamerHandle /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentBuyWantedlevel_result = Citizen.invokeNative<void>('0xA8C662E16DC4030E', amount, handle.dataView, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentBuyWantedlevel_result;
}