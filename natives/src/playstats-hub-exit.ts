import { HubExit } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HUB_EXIT
 *
 * 0x02F3C05A368B66B3

 * 
 * ------------------------------------------------------------------
 * @param {HubExit} data [Ref]
 */
export function playstatsHubExit(data: HubExit /* ptr */): void {
	const playstatsHubExit_result = Citizen.invokeNative<void>('0x02F3C05A368B66B3', data.dataView);
	return playstatsHubExit_result;
}