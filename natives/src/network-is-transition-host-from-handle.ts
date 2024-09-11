import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_TRANSITION_HOST_FROM_HANDLE
 *
 * 0xC8827E144B173DFB

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsTransitionHostFromHandle(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsTransitionHostFromHandle_result = Citizen.invokeNative<boolean>('0xC8827E144B173DFB', gamerHandle.dataView);
	return networkIsTransitionHostFromHandle_result;
}