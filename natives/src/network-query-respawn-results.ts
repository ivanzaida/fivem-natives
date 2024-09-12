import { IntRef, ERespawnQueryResults } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_QUERY_RESPAWN_RESULTS
 *
 * 0xC86D271C3C15DE36

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} numResults [Ref]
 * @returns {ERespawnQueryResults}  
 */
export function networkQueryRespawnResults(numResults: IntRef /* ptr */): ERespawnQueryResults {
	const networkQueryRespawnResults_result = Citizen.invokeNative<ERespawnQueryResults>('0xC86D271C3C15DE36', numResults.dataView);
	return networkQueryRespawnResults_result;
}