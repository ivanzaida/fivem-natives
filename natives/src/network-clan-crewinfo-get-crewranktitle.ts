import { StringRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_CREWINFO_GET_CREWRANKTITLE
 *
 * 0xD0C87974FE71F8C4

 * 
 * This function checks for the title for the EXACT rank, not the closest;
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} rank
 * @param {StringRef} outValue [Ref]
 * @returns {boolean}  
 */
export function networkClanCrewinfoGetCrewranktitle(rank: number, outValue: StringRef /* ptr */): boolean {
	const networkClanCrewinfoGetCrewranktitle_result = Citizen.invokeNative<boolean>('0xD0C87974FE71F8C4', rank, outValue.dataView);
	return networkClanCrewinfoGetCrewranktitle_result;
}