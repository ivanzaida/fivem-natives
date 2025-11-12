/**
 * TASK:SET_NEXT_DESIRED_MOVE_STATE
 *
 * 0x3CB52882A241CEA1

 * 
 * Works for the following commands TASK_ENTER_CAR_AS_DRIVER
 * TASK_ENTER_CAR_AS_PASSENGER
 * TASK_OPEN_DRIVER_DOOR
 * TASK_OPEN_PASSENGER_DOOR
 * TASK_GOTO_CHAR_OFFSET
 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * R Comment:
 * SET_NEXT_DESIRED_MOVE_STATE - Function is deprecated - do not use anymore
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} moveBlendRatio
 */
export function setNextDesiredMoveState(moveBlendRatio: number): void {
	const setNextDesiredMoveState_result = Citizen.invokeNative<void>('0x3CB52882A241CEA1', moveBlendRatio);
	return setNextDesiredMoveState_result;
}