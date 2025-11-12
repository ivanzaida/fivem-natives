import { PedIndex, EStartingHurtMode } from '@ivanzaida/structures'

/**
 * TASK:TASK_WRITHE
 *
 * 0xB8943DE03F115DCF

 * 
 * EX: Function.Call(Ped1, Ped2, Time, 0);
 * 
 * The last parameter is always 0 for some reason I do not know. The first parameter is the pedestrian who will writhe to the pedestrian in the other parameter. The third paremeter is how long until the Writhe task ends. When the task ends, the ped will die. If set to -1, he will not die automatically, and the task will continue until something causes it to end. This can be being touched by an entity, being shot, explosion, going into ragdoll, having task cleared. Anything that ends the current task will kill the ped at this point.
 * 
 * 
 * 
 * Third parameter does not appear to be time. The last parameter is not implemented (It's not used, regardless of value).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @param {number} minFireLoops
 * @param {EStartingHurtMode} startState
 * @param {boolean} forceShootOnGround Makes the ped go into the shooting from ground state, and prevents him from randomly dying in the loops
 * @param {number} shootFromGroundTimer Time in milliseconds that defines how long ped keeps shooting in each cycle (before playing writhe anims again)
 */
export function taskWrithe(ped: PedIndex, targetPed: PedIndex, minFireLoops: number, startState: EStartingHurtMode | number = 0, forceShootOnGround: boolean = false, shootFromGroundTimer: number = 1): void {
	const taskWrithe_result = Citizen.invokeNative<void>('0xB8943DE03F115DCF', ped, targetPed, minFireLoops, startState, forceShootOnGround, shootFromGroundTimer);
	return taskWrithe_result;
}