import { RobberyFinale } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_ROBBERY_FINALE
 *
 * 0xD3DAE430946FA2C0

 * 
 * ------------------------------------------------------------------
 * @param {RobberyFinale} data [Ref]
 */
export function playstatsRobberyFinale(data: RobberyFinale /* ptr */): void {
	const playstatsRobberyFinale_result = Citizen.invokeNative<void>('0xD3DAE430946FA2C0', data.dataView);
	return playstatsRobberyFinale_result;
}