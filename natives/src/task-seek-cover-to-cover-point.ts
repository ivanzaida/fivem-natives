import { PedIndex, CoverpointIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SEEK_COVER_TO_COVER_POINT
 *
 * 0xEC4B308C708928CD

 * 
 * Seeks cover in such a way as to avoid fire from position fromX, fromY, fromZ. Once cover is reached the ped will hide behind it for Time milliseconds then the task will end,
 * if Time is zero the ped will hide behind it indefinitely and the task will never end.
 * 
 * p5 is always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {CoverpointIndex} cover
 * @param {number} fromCoorsX
 * @param {number} fromCoorsY
 * @param {number} fromCoorsZ
 * @param {number} time
 * @param {boolean} canPeekAndAim
 */
export function taskSeekCoverToCoverPoint(ped: PedIndex, cover: CoverpointIndex, fromCoorsX: number, fromCoorsY: number, fromCoorsZ: number, time: number, canPeekAndAim: boolean = false): void {
	const taskSeekCoverToCoverPoint_result = Citizen.invokeNative<void>('0xEC4B308C708928CD', ped, cover, fromCoorsX, fromCoorsY, fromCoorsZ, time, canPeekAndAim);
	return taskSeekCoverToCoverPoint_result;
}