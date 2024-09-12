import { FmEventAmbMissionCriminalDamage } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_CRIMINALDAMAGE
 *
 * 0x842F188EE807AF8B

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionCriminalDamage} data [Ref]
 */
export function playstatsFmEventCriminaldamage(data: FmEventAmbMissionCriminalDamage /* ptr */): void {
	const playstatsFmEventCriminaldamage_result = Citizen.invokeNative<void>('0x842F188EE807AF8B', data.dataView);
	return playstatsFmEventCriminaldamage_result;
}