import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_FORCE_MOTION_STATE
 *
 * 0x218240D21FF14E21

 * 
 * p2 always false
 * 
 * [30/03/2017] ins1de :
 * 
 * See FORCE_PED_MOTION_STATE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} motionState
 * @param {boolean} forceRestart
 */
export function taskForceMotionState(ped: PedIndex, motionState: number, forceRestart: boolean = false): void {
	const taskForceMotionState_result = Citizen.invokeNative<void>('0x218240D21FF14E21', ped, motionState, forceRestart);
	return taskForceMotionState_result;
}