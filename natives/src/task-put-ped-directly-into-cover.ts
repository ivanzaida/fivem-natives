import { PedIndex, CoverpointIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PUT_PED_DIRECTLY_INTO_COVER
 *
 * 0x994B4C04761C0AA0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coverPosX
 * @param {number} coverPosY
 * @param {number} coverPosZ
 * @param {number} time
 * @param {boolean} canPeekAndAim
 * @param {number} blendInDuration
 * @param {boolean} forceInitialFacingDirection
 * @param {boolean} forceFaceLeft
 * @param {CoverpointIndex} cover
 * @param {boolean} doEntryAnim
 */
export function taskPutPedDirectlyIntoCover(ped: PedIndex, coverPosX: number, coverPosY: number, coverPosZ: number, time: number, canPeekAndAim: boolean = false, blendInDuration: number = 0, forceInitialFacingDirection: boolean = false, forceFaceLeft: boolean = false, cover: CoverpointIndex = null!, doEntryAnim: boolean = false): void {
	const taskPutPedDirectlyIntoCover_result = Citizen.invokeNative<void>('0x994B4C04761C0AA0', ped, coverPosX, coverPosY, coverPosZ, time, canPeekAndAim, blendInDuration, forceInitialFacingDirection, forceFaceLeft, cover, doEntryAnim);
	return taskPutPedDirectlyIntoCover_result;
}