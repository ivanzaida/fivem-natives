import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_AM_I_MUTED_BY_GAMER
 *
 * 0xD948F622B2C316C0

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkAmIMutedByGamer(gamer: GamerHandle /* ptr */): boolean {
	const networkAmIMutedByGamer_result = Citizen.invokeNative<boolean>('0xD948F622B2C316C0', gamer.dataView);
	return networkAmIMutedByGamer_result;
}