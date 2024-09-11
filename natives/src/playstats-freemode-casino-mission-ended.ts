import { FreemodeCasinoMissionEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FREEMODE_CASINO_MISSION_ENDED
 *
 * 0x4D301F952E820ABF

 * 
 * ------------------------------------------------------------------
 * @param {FreemodeCasinoMissionEnded} data [Ref]
 */
export function playstatsFreemodeCasinoMissionEnded(data: FreemodeCasinoMissionEnded /* ptr */): void {
	const playstatsFreemodeCasinoMissionEnded_result = Citizen.invokeNative<void>('0x4D301F952E820ABF', data.dataView);
	return playstatsFreemodeCasinoMissionEnded_result;
}