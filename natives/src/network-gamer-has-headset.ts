import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GAMER_HAS_HEADSET
 *
 * 0xC5687BF1EB7AC190

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkGamerHasHeadset(gamer: GamerHandle /* ptr */): boolean {
	const networkGamerHasHeadset_result = Citizen.invokeNative<boolean>('0xC5687BF1EB7AC190', gamer.dataView);
	return networkGamerHasHeadset_result;
}