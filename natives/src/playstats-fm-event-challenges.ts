import { FmEventAmbMissionChallenges } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_CHALLENGES
 *
 * 0x2D37C46EADE98E63

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionChallenges} data [Ref]
 */
export function playstatsFmEventChallenges(data: FmEventAmbMissionChallenges /* ptr */): void {
	const playstatsFmEventChallenges_result = Citizen.invokeNative<void>('0x2D37C46EADE98E63', data.dataView);
	return playstatsFmEventChallenges_result;
}