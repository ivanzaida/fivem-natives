import { HubEntry } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HUB_ENTRY
 *
 * 0xD7F11E9496A00370

 * 
 * ------------------------------------------------------------------
 * @param {HubEntry} data [Ref]
 */
export function playstatsHubEntry(data: HubEntry /* ptr */): void {
	const playstatsHubEntry_result = Citizen.invokeNative<void>('0xD7F11E9496A00370', data.dataView);
	return playstatsHubEntry_result;
}