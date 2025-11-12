import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SEEK_COVER_FROM_POS
 *
 * 0xE31B7CB52E42E2B6

 * 
 * If after a search no cover point can be found the task will finish.
 * Once cover is reached the ped will hide behind it for Time milliseconds then the task will end, if Time is zero the ped will hide behind it indefinitely and the task will never end.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} fromCoorsX
 * @param {number} fromCoorsY
 * @param {number} fromCoorsZ
 * @param {number} time
 * @param {boolean} canPeekAndAim
 */
export function taskSeekCoverFromPos(ped: PedIndex, fromCoorsX: number, fromCoorsY: number, fromCoorsZ: number, time: number, canPeekAndAim: boolean = false): void {
	const taskSeekCoverFromPos_result = Citizen.invokeNative<void>('0xE31B7CB52E42E2B6', ped, fromCoorsX, fromCoorsY, fromCoorsZ, time, canPeekAndAim);
	return taskSeekCoverFromPos_result;
}