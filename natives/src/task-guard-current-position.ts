import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GUARD_CURRENT_POSITION
 *
 * 0xAEFEF83576CF9532

 * 
 * From re_prisonvanbreak:
 * 
 * TASK::TASK_GUARD_CURRENT_POSITION(l_DD, 35.0, 35.0, 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} maxPatrolProximity
 * @param {number} guardAreaRadius
 * @param {boolean} setDefensiveArea
 */
export function taskGuardCurrentPosition(ped: PedIndex, maxPatrolProximity: number, guardAreaRadius: number, setDefensiveArea: boolean): void {
	const taskGuardCurrentPosition_result = Citizen.invokeNative<void>('0xAEFEF83576CF9532', ped, maxPatrolProximity, guardAreaRadius, setDefensiveArea);
	return taskGuardCurrentPosition_result;
}