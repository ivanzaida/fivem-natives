import { GunrunningMissionEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_GUNRUNNING_MISSION_ENDED
 *
 * 0xCF78529B9B88C73E

 * 
 * ------------------------------------------------------------------
 * @param {GunrunningMissionEnd} data [Ref]
 */
export function playstatsGunrunningMissionEnded(data: GunrunningMissionEnd /* ptr */): void {
	const playstatsGunrunningMissionEnded_result = Citizen.invokeNative<void>('0xCF78529B9B88C73E', data.dataView);
	return playstatsGunrunningMissionEnded_result;
}