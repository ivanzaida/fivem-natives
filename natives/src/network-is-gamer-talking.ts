import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_GAMER_TALKING
 *
 * 0x6E171E077926FBF7

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkIsGamerTalking(gamer: GamerHandle /* ptr */): boolean {
	const networkIsGamerTalking_result = Citizen.invokeNative<boolean>('0x6E171E077926FBF7', gamer.dataView);
	return networkIsGamerTalking_result;
}