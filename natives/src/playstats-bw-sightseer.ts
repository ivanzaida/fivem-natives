import { BwSightseer } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_SIGHTSEER
 *
 * 0x6FA1E0B637DED988

 * 
 * ------------------------------------------------------------------
 * @param {BwSightseer} data [Ref]
 */
export function playstatsBwSightseer(data: BwSightseer /* ptr */): void {
	const playstatsBwSightseer_result = Citizen.invokeNative<void>('0x6FA1E0B637DED988', data.dataView);
	return playstatsBwSightseer_result;
}