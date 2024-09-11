import { SpentOnTiltrotor } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_TILTROTOR
 *
 * 0xC19533F1B83A7895

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnTiltrotor} data [Ref]
 */
export function networkSpentUpgradeTiltrotor(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnTiltrotor /* ptr */): void {
	const networkSpentUpgradeTiltrotor_result = Citizen.invokeNative<void>('0xC19533F1B83A7895', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentUpgradeTiltrotor_result;
}