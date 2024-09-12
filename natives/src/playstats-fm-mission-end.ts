import { FmMissionEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_MISSION_END
 *
 * 0xA40024641239312A

 * 
 * ------------------------------------------------------------------
 * @param {FmMissionEnd} data [Ref]
 * @param {number} availMis
 * @param {number} availMisDif
 */
export function playstatsFmMissionEnd(data: FmMissionEnd /* ptr */, availMis: number, availMisDif: number): void {
	const playstatsFmMissionEnd_result = Citizen.invokeNative<void>('0xA40024641239312A', data.dataView, availMis, availMisDif);
	return playstatsFmMissionEnd_result;
}