import { PedIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_ATTRIBUTE_DAMAGE_TO_PLAYER
 *
 * 0x926910F3168C206A

 * 
 * call to attribute damage done by this ped PedIndex to PlayerIndex
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkSetAttributeDamageToPlayer(ped: PedIndex, player: PlayerIndex): boolean {
	const networkSetAttributeDamageToPlayer_result = Citizen.invokeNative<boolean>('0x926910F3168C206A', ped, player);
	return networkSetAttributeDamageToPlayer_result;
}