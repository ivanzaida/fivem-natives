import { PedIndex, EFollowpointroutemode } from '@ivanzaida/structures'

/**
 * TASK:TASK_FOLLOW_POINT_ROUTE
 *
 * 0xCEF5F1212D833FEF

 * 
 * MulleKD19: Makes the ped go on the created point route.
 * 
 * ped: The ped to give the task to.
 * speed: The speed to move at in m/s.
 * int: Unknown. Can be 0, 1, 2 or 3.
 * 
 * Example:
 * TASK_FLUSH_ROUTE();
 * TASK_EXTEND_ROUTE(0f, 0f, 70f);
 * TASK_EXTEND_ROUTE(10f, 0f, 70f);
 * TASK_EXTEND_ROUTE(10f, 10f, 70f);
 * TASK_FOLLOW_POINT_ROUTE(GET_PLAYER_PED(), 1f, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} moveBlendRatio
 * @param {EFollowpointroutemode} mode
 */
export function taskFollowPointRoute(ped: PedIndex, moveBlendRatio: number, mode: EFollowpointroutemode | number): void {
	const taskFollowPointRoute_result = Citizen.invokeNative<void>('0xCEF5F1212D833FEF', ped, moveBlendRatio, mode);
	return taskFollowPointRoute_result;
}