import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_ACTIVITY_SPECTATOR_FROM_HANDLE
 *
 * 0xDFA2DE98496613A2

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkIsActivitySpectatorFromHandle(gamer: GamerHandle /* ptr */): boolean {
	const networkIsActivitySpectatorFromHandle_result = Citizen.invokeNative<boolean>('0xDFA2DE98496613A2', gamer.dataView);
	return networkIsActivitySpectatorFromHandle_result;
}