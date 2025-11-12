import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_FREE_FOR_AMBIENT_TASK
 *
 * 0x566C977EEAE1C0D1

 * 
 * Note it might work best if ambient tasks make sure the player has been free for an ambient task for a few seconds depending on the situation.
 * (E.g. if the player hasn't done anything interesting for 5 seconds, allow cab hailing)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerFreeForAmbientTask(player: PlayerIndex): boolean {
	const isPlayerFreeForAmbientTask_result = Citizen.invokeNative<boolean>('0x566C977EEAE1C0D1', player);
	return isPlayerFreeForAmbientTask_result;
}