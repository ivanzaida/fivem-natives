import { BuyAutoshop } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_BUY_AUTOSHOP
 *
 * 0xC6B8A83CB698802E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BuyAutoshop} data [Ref]
 */
export function networkSpendBuyAutoshop(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BuyAutoshop /* ptr */): void {
	const networkSpendBuyAutoshop_result = Citizen.invokeNative<void>('0xC6B8A83CB698802E', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendBuyAutoshop_result;
}