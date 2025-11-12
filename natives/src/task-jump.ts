import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_JUMP
 *
 * 0xC3EBEA7530D64F53

 * 
 * Definition is wrong. This has 4 parameters (Not sure when they were added. v350 has 2, v678 has 4).
 * 
 * v350: Ped ped, bool unused
 * v678: Ped ped, bool unused, bool flag1, bool flag2
 * 
 * flag1 = super jump, flag2 = do nothing if flag1 is false and doubles super jump height if flag1 is true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} usePlayerLaunch
 * @param {boolean} doSuperJump
 * @param {boolean} useFullSuperJumpForce
 */
export function taskJump(ped: PedIndex, usePlayerLaunch: boolean, doSuperJump: boolean = false, useFullSuperJumpForce: boolean = false): void {
	const taskJump_result = Citizen.invokeNative<void>('0xC3EBEA7530D64F53', ped, usePlayerLaunch, doSuperJump, useFullSuperJumpForce);
	return taskJump_result;
}