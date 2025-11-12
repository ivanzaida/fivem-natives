import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SEEK_COVER_TO_COORDS
 *
 * 0xF8936AB29F37B33B

 * 
 * The ped will find the nearest cover point to the coords given.
 * Once cover is reached the ped will hide behind it for Time milliseconds then the task will end, if Time is zero the ped will hide behind it indefinitely and the task will never end.
 * 
 * p8 causes the ped to take the shortest route to the cover position. It may have something to do with navmesh or pathfinding mechanics.
 * 
 * from michael2:
 * TASK::TASK_SEEK_COVER_TO_COORDS(ped, 967.5164794921875, -2121.603515625, 30.479299545288086, 978.94677734375, -2125.84130859375, 29.4752, -1, 1);
 * 
 * 
 * appears to be shorter variation
 * from michael3:
 * TASK::TASK_SEEK_COVER_TO_COORDS(ped, -2231.011474609375, 263.6326599121094, 173.60195922851562, -1, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} cooverCoorsX
 * @param {number} cooverCoorsY
 * @param {number} cooverCoorsZ
 * @param {number} fromCoorsX
 * @param {number} fromCoorsY
 * @param {number} fromCoorsZ
 * @param {number} time
 * @param {boolean} canPeekAndAim
 */
export function taskSeekCoverToCoords(ped: PedIndex, cooverCoorsX: number, cooverCoorsY: number, cooverCoorsZ: number, fromCoorsX: number, fromCoorsY: number, fromCoorsZ: number, time: number, canPeekAndAim: boolean = false): void {
	const taskSeekCoverToCoords_result = Citizen.invokeNative<void>('0xF8936AB29F37B33B', ped, cooverCoorsX, cooverCoorsY, cooverCoorsZ, fromCoorsX, fromCoorsY, fromCoorsZ, time, canPeekAndAim);
	return taskSeekCoverToCoords_result;
}