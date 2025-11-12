import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:TRIGGER_TUNING_CRC_HACKER_CHECK
 *
 * -

 * 
 * Same exact behaviour as TRIGGER_PLAYER_CRC_HACKER_CHECK.
 * This is a wrapper to perform just CRC_TUNING_SYSTEM script checks passing strings as a param (nicer input).
 * Code will internally pack them into an INT subsystem and pass it to a TRIGGER_PLAYER_CRC_HACKER_CHECK call.
 * Example input: group "Player Targetting" and instance "CPlayerPedTargeting"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} receiver
 * @param {string} tuningGroup
 * @param {string} tuningInstance
 * @returns {boolean}  
 */
export function triggerTuningCrcHackerCheck(receiver: PlayerIndex, tuningGroup: string, tuningInstance: string): boolean {
	const triggerTuningCrcHackerCheck_result = Citizen.invokeNative<boolean>('-', receiver, tuningGroup, tuningInstance);
	return triggerTuningCrcHackerCheck_result;
}