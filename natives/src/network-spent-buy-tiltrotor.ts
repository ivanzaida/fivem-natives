import { SpentOnTiltrotor } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_BUY_TILTROTOR
 *
 * 0x7544F7A9D8A06A08

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnTiltrotor} data [Ref]
 */
export function networkSpentBuyTiltrotor(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnTiltrotor /* ptr */): void {
	const networkSpentBuyTiltrotor_result = Citizen.invokeNative<void>('0x7544F7A9D8A06A08', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentBuyTiltrotor_result;
}