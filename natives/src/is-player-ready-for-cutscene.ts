import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_READY_FOR_CUTSCENE
 *
 * 0xFB1E434B5C3D0CEE

 * 
 * the player is considered safe if they are:
 * In a car and not entering or exiting or
 * On foot and not ragdolling
 * Use CAN_PLAYER_START_CUTSCENE() - this calls the above function, but also checks that the player is not a passenger in a taxi.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerReadyForCutscene(player: PlayerIndex): boolean {
	const isPlayerReadyForCutscene_result = Citizen.invokeNative<boolean>('0xFB1E434B5C3D0CEE', player);
	return isPlayerReadyForCutscene_result;
}