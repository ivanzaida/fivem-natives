import { ArenaWarsEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_ARENA_WARS_ENDED
 *
 * 0xF215BF4F28EC3017

 * 
 * ------------------------------------------------------------------
 * @param {ArenaWarsEnded} data [Ref]
 */
export function playstatsArenaWarsEnded(data: ArenaWarsEnded /* ptr */): void {
	const playstatsArenaWarsEnded_result = Citizen.invokeNative<void>('0xF215BF4F28EC3017', data.dataView);
	return playstatsArenaWarsEnded_result;
}