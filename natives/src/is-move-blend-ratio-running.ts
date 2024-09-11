/**
 * TASK:IS_MOVE_BLEND_RATIO_RUNNING
 *
 * 0xC1C69295C2020379

 * 
 * ------------------------------------------------------------------
 * @param {number} moveBlendRatio
 * @returns {boolean}  
 */
export function isMoveBlendRatioRunning(moveBlendRatio: number): boolean {
	const isMoveBlendRatioRunning_result = Citizen.invokeNative<boolean>('0xC1C69295C2020379', moveBlendRatio);
	return isMoveBlendRatioRunning_result;
}