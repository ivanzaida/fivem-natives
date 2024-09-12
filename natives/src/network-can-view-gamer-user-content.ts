import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_VIEW_GAMER_USER_CONTENT
 *
 * 0x8EF8E27D73EB5271

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanViewGamerUserContent(gamer: GamerHandle /* ptr */): boolean {
	const networkCanViewGamerUserContent_result = Citizen.invokeNative<boolean>('0x8EF8E27D73EB5271', gamer.dataView);
	return networkCanViewGamerUserContent_result;
}