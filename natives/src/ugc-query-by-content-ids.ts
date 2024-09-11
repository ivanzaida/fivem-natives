import { UgcContentIdQuery } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_QUERY_BY_CONTENT_IDS
 *
 * 0x4516244647CDE56D

 * 
 * ------------------------------------------------------------------
 * @param {UgcContentIdQuery} queryIDs [Ref]
 * @param {number} numIDs
 * @param {boolean} latest
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcQueryByContentIds(queryIDs: UgcContentIdQuery /* ptr */, numIDs: number, latest: boolean, szContentType: string): boolean {
	const ugcQueryByContentIds_result = Citizen.invokeNative<boolean>('0x4516244647CDE56D', queryIDs.dataView, numIDs, latest, szContentType);
	return ugcQueryByContentIds_result;
}