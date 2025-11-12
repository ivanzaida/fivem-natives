import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SIMULATE_PLAYER_INPUT_GAIT
 *
 * 0x8EAC8FBDF8A3830E

 * 
 * This will simulate the player's controller input. This simulation would move the player
 * actor forward until the left stick is touched or the timer is reached.
 * To skip tranisation when coming out a cut scene, e.g., form idle to run, the vignette leadout should sequence the player to the run node.
 * 
 * This is to make the player walk without accepting input from INPUT.
 * 
 * gaitType is in increments of 100s. 2000, 500, 300, 200, etc.
 * 
 * p4 is always 1 and p5 is always 0.
 * 
 * C# Example :
 * 
 * Function.Call(Hash.SIMULATE_PLAYER_INPUT_GAIT, Game.Player, 1.0f, 100, 1.0f, 1, 0); //Player will go forward for 100ms
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerIdx
 * @param {number} moveBlendRatio
 * @param {number} timer This can be interrupted if left stick is touched, in millisecond.
 * @param {number} heading
 * @param {boolean} useRelativeHeading If the heading is global or local to the ped.
 * @param {boolean} noInputInterruption If true, don't break out on input changes, it just times out.
 */
export function simulatePlayerInputGait(playerIdx: PlayerIndex, moveBlendRatio: number, timer: number = 2000, heading: number = 0, useRelativeHeading: boolean = true, noInputInterruption: boolean = false): void {
	const simulatePlayerInputGait_result = Citizen.invokeNative<void>('0x8EAC8FBDF8A3830E', playerIdx, moveBlendRatio, timer, heading, useRelativeHeading, noInputInterruption);
	return simulatePlayerInputGait_result;
}