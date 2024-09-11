import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:UPDATE_PLAYER_TELEPORT
 *
 * 0x8644ACAF2A301B7E

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function updatePlayerTeleport(player: PlayerIndex): boolean {
	const updatePlayerTeleport_result = Citizen.invokeNative<boolean>('0x8644ACAF2A301B7E', player);
	return updatePlayerTeleport_result;
}