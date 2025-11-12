import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:REMOTE_CHEATER_PLAYER_DETECTED
 *
 * 0x1CACC0A56175FE7D

 * 
 * Sends telemetry event to Rinforming that this machine thinks given remote player is cheating/hacker.
 * Event contains both player A and B, is flagged as a SCRIPT_CHEAT_DETECTION cheat detected, and attaches extraInfo1&2 as script extra proofs.
 * extraInfo may contain whatever script needs relevant to identify which actual script triggered this event, or why remote may be a hacker.
 * Returns TRUE if the ROS telemetry event was corretly sent to Rservers.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plyCheater
 * @param {number} extraInfo1
 * @param {number} extraInfo2
 * @returns {boolean}  
 */
export function remoteCheaterPlayerDetected(plyCheater: PlayerIndex, extraInfo1: number, extraInfo2: number): boolean {
	const remoteCheaterPlayerDetected_result = Citizen.invokeNative<boolean>('0x1CACC0A56175FE7D', plyCheater, extraInfo1, extraInfo2);
	return remoteCheaterPlayerDetected_result;
}