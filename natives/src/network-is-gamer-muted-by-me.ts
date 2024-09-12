import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_GAMER_MUTED_BY_ME
 *
 * 0x73038C255039CB0A

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkIsGamerMutedByMe(gamer: GamerHandle /* ptr */): boolean {
	const networkIsGamerMutedByMe_result = Citizen.invokeNative<boolean>('0x73038C255039CB0A', gamer.dataView);
	return networkIsGamerMutedByMe_result;
}