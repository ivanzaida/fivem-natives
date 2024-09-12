import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_TARGETTING_ANYTHING
 *
 * 0x4F035D45FC2856F8

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerTargettingAnything(player: PlayerIndex): boolean {
	const isPlayerTargettingAnything_result = Citizen.invokeNative<boolean>('0x4F035D45FC2856F8', player);
	return isPlayerTargettingAnything_result;
}