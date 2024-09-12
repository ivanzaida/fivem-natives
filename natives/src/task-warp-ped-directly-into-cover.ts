import { PedIndex, CoverpointIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_WARP_PED_DIRECTLY_INTO_COVER
 *
 * 0x0049FC50A5D65452

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 * @param {boolean} canPeekAndAim
 * @param {boolean} forceInitialFacingDirection
 * @param {boolean} forceFaceLeft
 * @param {CoverpointIndex} cover
 */
export function taskWarpPedDirectlyIntoCover(ped: PedIndex, time: number, canPeekAndAim: boolean = false, forceInitialFacingDirection: boolean = false, forceFaceLeft: boolean = false, cover: CoverpointIndex = null!): void {
	const taskWarpPedDirectlyIntoCover_result = Citizen.invokeNative<void>('0x0049FC50A5D65452', ped, time, canPeekAndAim, forceInitialFacingDirection, forceFaceLeft, cover);
	return taskWarpPedDirectlyIntoCover_result;
}