import { RobberyPrep } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_ROBBERY_PREP
 *
 * 0xBD30FDBCFA1FA6FE

 * 
 * ------------------------------------------------------------------
 * @param {RobberyPrep} data [Ref]
 */
export function playstatsRobberyPrep(data: RobberyPrep /* ptr */): void {
	const playstatsRobberyPrep_result = Citizen.invokeNative<void>('0xBD30FDBCFA1FA6FE', data.dataView);
	return playstatsRobberyPrep_result;
}