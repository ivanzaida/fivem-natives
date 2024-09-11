import { ArcadeCabinet } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_ARCADE_CABINET
 *
 * 0x2970B68950960A6C

 * 
 * ------------------------------------------------------------------
 * @param {ArcadeCabinet} data [Ref]
 */
export function playstatsArcadeCabinet(data: ArcadeCabinet /* ptr */): void {
	const playstatsArcadeCabinet_result = Citizen.invokeNative<void>('0x2970B68950960A6C', data.dataView);
	return playstatsArcadeCabinet_result;
}