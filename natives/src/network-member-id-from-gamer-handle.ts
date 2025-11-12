import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_MEMBER_ID_FROM_GAMER_HANDLE
 *
 * 0x0CA8AE01D86E1FDC

 * 
 * Returns member ID of passed in gamer handle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {string}  
 */
export function networkMemberIdFromGamerHandle(gamerHandle: GamerHandle /* ptr */): string {
	const networkMemberIdFromGamerHandle_result = Citizen.invokeNative<string>('0x0CA8AE01D86E1FDC', gamerHandle.dataView);
	return networkMemberIdFromGamerHandle_result;
}