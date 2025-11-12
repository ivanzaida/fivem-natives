import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GAMERTAG_FROM_HANDLE_START
 *
 * 0x8F46B8E54248FD48

 * 
 * Retrieve a gamertag from a gamerHandle (async)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkGamertagFromHandleStart(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkGamertagFromHandleStart_result = Citizen.invokeNative<boolean>('0x8F46B8E54248FD48', gamerHandle.dataView);
	return networkGamertagFromHandleStart_result;
}