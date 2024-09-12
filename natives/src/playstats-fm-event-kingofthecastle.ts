import { FmEventAmbMissionKingoftheCastle } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_KINGOFTHECASTLE
 *
 * 0x0E8BC7181CB760A3

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionKingoftheCastle} data [Ref]
 */
export function playstatsFmEventKingofthecastle(data: FmEventAmbMissionKingoftheCastle /* ptr */): void {
	const playstatsFmEventKingofthecastle_result = Citizen.invokeNative<void>('0x0E8BC7181CB760A3', data.dataView);
	return playstatsFmEventKingofthecastle_result;
}