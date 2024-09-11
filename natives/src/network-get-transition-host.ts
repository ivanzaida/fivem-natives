import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_TRANSITION_HOST
 *
 * 0xE344B3616A2C3592

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkGetTransitionHost(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkGetTransitionHost_result = Citizen.invokeNative<boolean>('0xE344B3616A2C3592', gamerHandle.dataView);
	return networkGetTransitionHost_result;
}