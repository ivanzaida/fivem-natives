import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_CONTENT_CREATOR_GAMER_HANDLE
 *
 * 0x2461B1057D922D96

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function ugcGetContentCreatorGamerHandle(content: number, gamer: GamerHandle /* ptr */): boolean {
	const ugcGetContentCreatorGamerHandle_result = Citizen.invokeNative<boolean>('0x2461B1057D922D96', content, gamer.dataView);
	return ugcGetContentCreatorGamerHandle_result;
}