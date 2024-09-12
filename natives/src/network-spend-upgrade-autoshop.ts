import { BuyAutoshop } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_UPGRADE_AUTOSHOP
 *
 * 0x3FA880262FF79243

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {BuyAutoshop} data [Ref]
 */
export function networkSpendUpgradeAutoshop(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: BuyAutoshop /* ptr */): void {
	const networkSpendUpgradeAutoshop_result = Citizen.invokeNative<void>('0x3FA880262FF79243', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendUpgradeAutoshop_result;
}