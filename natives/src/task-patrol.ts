import { PedIndex, EPatrolAlertState } from '@ivanzaida/structures'

/**
 * TASK:TASK_PATROL
 *
 * 0x0253650DCBDD84B3

 * This can only be called once a valid a ptrol route has been added.
 * After looking at some scripts the second parameter seems to be an id of some kind. Here are some I found from some R scripts:
 * "miss_Tower_01" (this went from 01 - 10)
 * "miss_Ass0" (0, 4, 6, 3)
 * "MISS_PATROL_8"
 * I think they're patrol routes, but I'm not sure. And I believe the 3rd parameter is a BOOL, but I can't confirm other than only seeing 0 and 1 being passed.
 * As far as I can see the patrol routes names such as "miss_Ass0" have been defined earlier in the scripts. This leads me to believe we can defined our own new patrol routes by following the same approach.
 * From the scripts
 *     TASK::OPEN_PATROL_ROUTE("miss_Ass0");
 *     TASK::ADD_PATROL_ROUTE_NODE(0, "WORLD_HUMAN_GUARD_STAND", l_738[0/3/], -139.4076690673828, -993.4732055664062, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
 *     TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_738[1/3/], -116.1391830444336, -987.4984130859375, 26.38541030883789, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
 *     TASK::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", l_738[2/3/], -128.46847534179688, -979.0340576171875, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
 *     TASK::ADD_PATROL_ROUTE_LINK(0, 1);
 *     TASK::ADD_PATROL_ROUTE_LINK(1, 2);
 *     TASK::ADD_PATROL_ROUTE_LINK(2, 0);
 *     TASK::CLOSE_PATROL_ROUTE();
 *     TASK::CREATE_PATROL_ROUTE();
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} routeName
 * @param {EPatrolAlertState} pedAlertState
 * @param {boolean} canChatToPeds
 * @param {boolean} canUseHeadLookAtAlongRoute
 */
export function taskPatrol(ped: PedIndex, routeName: string, pedAlertState: EPatrolAlertState | number, canChatToPeds: boolean = false, canUseHeadLookAtAlongRoute: boolean = true): void {
	const taskPatrol_result = Citizen.invokeNative<void>('0x0253650DCBDD84B3', ped, routeName, pedAlertState, canChatToPeds, canUseHeadLookAtAlongRoute);
	return taskPatrol_result;
}