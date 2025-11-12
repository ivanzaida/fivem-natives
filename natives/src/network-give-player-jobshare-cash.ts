import { GamerHandle } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_GIVE_PLAYER_JOBSHARE_CASH
 *
 * 0x463EA8B3DD0A6567

 * 
 * Give cash from the local player to another from last job
 * Script calls NETWORK_RECEIVE_PLAYER_JOBSHARE_CASH for players in the same session;
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {GamerHandle} handle [Ref]
 */
export function networkGivePlayerJobshareCash(amount: number, handle: GamerHandle /* ptr */): void {
	const networkGivePlayerJobshareCash_result = Citizen.invokeNative<void>('0x463EA8B3DD0A6567', amount, handle.dataView);
	return networkGivePlayerJobshareCash_result;
}