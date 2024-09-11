import { Arcade } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUY_ARCADE
 *
 * 0x23832C1A8C99748C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {Arcade} data [Ref]
 */
export function networkSpendBuyArcade(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: Arcade /* ptr */): void {
	const networkSpendBuyArcade_result = Citizen.invokeNative<void>('0x23832C1A8C99748C', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBuyArcade_result;
}