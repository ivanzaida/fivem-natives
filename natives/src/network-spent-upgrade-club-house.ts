import { SpendClubHouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_CLUB_HOUSE
 *
 * 0xB69E368585E687CB

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendClubHouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeClubHouse(amount: number, data: SpendClubHouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeClubHouse_result = Citizen.invokeNative<void>('0xB69E368585E687CB', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeClubHouse_result;
}