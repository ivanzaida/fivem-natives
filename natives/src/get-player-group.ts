import { PlayerIndex, GroupIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_GROUP
 *
 * 0xD59511AF30BE1934

 * 
 * When the player is created, a group is also created with the player as its leader.
 * You should never need to create another group for the player to lead.
 * 
 * Returns the group ID the player is member of.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {GroupIndex}  
 */
export function getPlayerGroup(player: PlayerIndex): GroupIndex {
	const getPlayerGroup_result = Citizen.invokeNative<GroupIndex>('0xD59511AF30BE1934', player);
	return getPlayerGroup_result;
}