import { Arcade } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_UPGRADE_ARCADE
 *
 * 0x58F5E56CDD996880

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {Arcade} data [Ref]
 */
export function networkSpendUpgradeArcade(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: Arcade /* ptr */): void {
	const networkSpendUpgradeArcade_result = Citizen.invokeNative<void>('0x58F5E56CDD996880', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendUpgradeArcade_result;
}