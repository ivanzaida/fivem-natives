import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_TEAM
 *
 * 0x1B0F8D3B4EE07EE0

 * 
 * Set player team on deathmatch and last team standing..
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} team
 */
export function setPlayerTeam(player: PlayerIndex, team: number): void {
	const setPlayerTeam_result = Citizen.invokeNative<void>('0x1B0F8D3B4EE07EE0', player, team);
	return setPlayerTeam_result;
}