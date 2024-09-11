import { GamerHandle } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_CALL_PLAYER
 *
 * 0x3C433641FBE9B092

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {GamerHandle} handle [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentCallPlayer(amount: number, handle: GamerHandle /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentCallPlayer_result = Citizen.invokeNative<void>('0x3C433641FBE9B092', amount, handle.dataView, fromBank, fromBankAndWallet);
	return networkSpentCallPlayer_result;
}