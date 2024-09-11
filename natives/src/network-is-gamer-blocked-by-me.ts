import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_GAMER_BLOCKED_BY_ME
 *
 * 0x4BD40114338C93C0

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkIsGamerBlockedByMe(gamer: GamerHandle /* ptr */): boolean {
	const networkIsGamerBlockedByMe_result = Citizen.invokeNative<boolean>('0x4BD40114338C93C0', gamer.dataView);
	return networkIsGamerBlockedByMe_result;
}