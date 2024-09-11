import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_CREW_CONTENT
 *
 * 0x02D3878E122FB9CD

 * 
 * ------------------------------------------------------------------
 * @param {number} clanID
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetCrewContent(clanID: number, offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetCrewContent_result = Citizen.invokeNative<boolean>('0x02D3878E122FB9CD', clanID, offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetCrewContent_result;
}