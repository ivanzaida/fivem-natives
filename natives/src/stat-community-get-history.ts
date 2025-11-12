import { EStatsenum, FloatRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_COMMUNITY_GET_HISTORY
 *
 * 0x3BD9AF4ED006CA00

 * 
 * Retrieve the Community (Stock Market) stat history value with id keyHash and history depth equal to depth.
 * Maximum depth is 5.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} depth
 * @param {FloatRef} outData [Ref]
 * @returns {boolean}  
 */
export function statCommunityGetHistory(keyHash: EStatsenum | number, depth: number, outData: FloatRef /* ptr */): boolean {
	const statCommunityGetHistory_result = Citizen.invokeNative<boolean>('0x3BD9AF4ED006CA00', keyHash, depth, outData.dataView);
	return statCommunityGetHistory_result;
}