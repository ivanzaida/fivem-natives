import { UgcContentIdQuery } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_GET_BY_CONTENT_IDS
 *
 * 0x423AC9BED82065D0

 * 
 * ------------------------------------------------------------------
 * @param {UgcContentIdQuery} queryIDs [Ref]
 * @param {number} numIDs
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcGetGetByContentIds(queryIDs: UgcContentIdQuery /* ptr */, numIDs: number, szContentType: string): boolean {
	const ugcGetGetByContentIds_result = Citizen.invokeNative<boolean>('0x423AC9BED82065D0', queryIDs.dataView, numIDs, szContentType);
	return ugcGetGetByContentIds_result;
}