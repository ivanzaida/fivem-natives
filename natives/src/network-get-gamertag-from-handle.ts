import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_GAMERTAG_FROM_HANDLE
 *
 * 0x6E4BB594E2A075CC

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {string}  
 */
export function networkGetGamertagFromHandle(gamerHandle: GamerHandle /* ptr */): string {
	const networkGetGamertagFromHandle_result = Citizen.invokeNative<string>('0x6E4BB594E2A075CC', gamerHandle.dataView);
	return networkGetGamertagFromHandle_result;
}