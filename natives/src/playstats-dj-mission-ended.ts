import { DjMissionEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_DJ_MISSION_ENDED
 *
 * 0x7C1CE15F51FA4860

 * 
 * ------------------------------------------------------------------
 * @param {DjMissionEnded} data [Ref]
 */
export function playstatsDjMissionEnded(data: DjMissionEnded /* ptr */): void {
	const playstatsDjMissionEnded_result = Citizen.invokeNative<void>('0x7C1CE15F51FA4860', data.dataView);
	return playstatsDjMissionEnded_result;
}