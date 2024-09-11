import { PedIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PLAYER_PED_IS_FOLLOWING
 *
 * 0x5F858847305B52A9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PlayerIndex}  
 */
export function getPlayerPedIsFollowing(ped: PedIndex): PlayerIndex {
	const getPlayerPedIsFollowing_result = Citizen.invokeNative<PlayerIndex>('0x5F858847305B52A9', ped);
	return getPlayerPedIsFollowing_result;
}