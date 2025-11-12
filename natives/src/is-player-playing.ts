import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_PLAYING
 *
 * 0x75EAB09F5E974116

 * 
 * Returns FALSE if the screen is fading due to the player being killed or arrested or failing a critical mission.
 * 
 * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerPlaying(player: PlayerIndex): boolean {
	const isPlayerPlaying_result = Citizen.invokeNative<boolean>('0x75EAB09F5E974116', player);
	return isPlayerPlaying_result;
}