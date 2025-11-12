import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_SPRINT_TIME_REMAINING
 *
 * 0xE43577CB2EC4FFD6

 * 
 * Gets the current sprint time remaining
 * At the minute this is for on foot only.  Can be modified for bikes/swimming if needed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerSprintTimeRemaining(player: PlayerIndex): number {
	const getPlayerSprintTimeRemaining_result = Citizen.invokeNative<number>('0xE43577CB2EC4FFD6', player);
	return getPlayerSprintTimeRemaining_result;
}