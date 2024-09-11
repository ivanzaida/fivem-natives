import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_MARK_TRANSITION_GAMER_AS_FULLY_JOINED
 *
 * 0x3E331587D83F6765

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkMarkTransitionGamerAsFullyJoined(gamer: GamerHandle /* ptr */): boolean {
	const networkMarkTransitionGamerAsFullyJoined_result = Citizen.invokeNative<boolean>('0x3E331587D83F6765', gamer.dataView);
	return networkMarkTransitionGamerAsFullyJoined_result;
}