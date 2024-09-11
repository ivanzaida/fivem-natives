import { FmEventAmbMissionUrbanWarfare } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_URBANWARFARE
 *
 * 0x2825919430010B91

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionUrbanWarfare} data [Ref]
 */
export function playstatsFmEventUrbanwarfare(data: FmEventAmbMissionUrbanWarfare /* ptr */): void {
	const playstatsFmEventUrbanwarfare_result = Citizen.invokeNative<void>('0x2825919430010B91', data.dataView);
	return playstatsFmEventUrbanwarfare_result;
}