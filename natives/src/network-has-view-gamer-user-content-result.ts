import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_VIEW_GAMER_USER_CONTENT_RESULT
 *
 * 0x585FB8B7945FC92A

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkHasViewGamerUserContentResult(gamer: GamerHandle /* ptr */): boolean {
	const networkHasViewGamerUserContentResult_result = Citizen.invokeNative<boolean>('0x585FB8B7945FC92A', gamer.dataView);
	return networkHasViewGamerUserContentResult_result;
}