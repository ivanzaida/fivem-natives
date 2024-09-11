import { GamerHandle, ArcadeLoveMatch } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_ARCADE_LOVE_MATCH
 *
 * 0x82BF0C9FB824099C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @param {ArcadeLoveMatch} data [Ref]
 */
export function playstatsArcadeLoveMatch(gamer: GamerHandle /* ptr */, data: ArcadeLoveMatch /* ptr */): void {
	const playstatsArcadeLoveMatch_result = Citizen.invokeNative<void>('0x82BF0C9FB824099C', gamer.dataView, data.dataView);
	return playstatsArcadeLoveMatch_result;
}