import { SpentOnBunker } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPRADE_BUNKER
 *
 * 0x239899C7038B89B2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnBunker} data [Ref]
 */
export function networkSpentUpradeBunker(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnBunker /* ptr */): void {
	const networkSpentUpradeBunker_result = Citizen.invokeNative<void>('0x239899C7038B89B2', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentUpradeBunker_result;
}