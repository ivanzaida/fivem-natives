import { GamerHandle } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_RECEIVE_PLAYER_JOBSHARE_CASH
 *
 * 0x648740220EDDB123

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {GamerHandle} handle [Ref]
 */
export function networkReceivePlayerJobshareCash(amount: number, handle: GamerHandle /* ptr */): void {
	const networkReceivePlayerJobshareCash_result = Citizen.invokeNative<void>('0x648740220EDDB123', amount, handle.dataView);
	return networkReceivePlayerJobshareCash_result;
}