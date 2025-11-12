import { PedIndex, ECoverExitType } from '@ivanzaida/structures'

/**
 * TASK:TASK_EXIT_COVER
 *
 * 0x03BD287EC78FB55F

 * 
 * p1 is 1, 2, or 3 in scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECoverExitType} exitType
 * @param {number} targetCoorsX
 * @param {number} targetCoorsY
 * @param {number} targetCoorsZ
 */
export function taskExitCover(ped: PedIndex, exitType: ECoverExitType | number, targetCoorsX: number, targetCoorsY: number, targetCoorsZ: number): void {
	const taskExitCover_result = Citizen.invokeNative<void>('0x03BD287EC78FB55F', ped, exitType, targetCoorsX, targetCoorsY, targetCoorsZ);
	return taskExitCover_result;
}