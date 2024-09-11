/**
 * TASK:IS_MOVE_BLEND_RATIO_STILL
 *
 * 0xF35435F8DC034A5C

 * 
 * ------------------------------------------------------------------
 * @param {number} moveBlendRatio
 * @returns {boolean}  
 */
export function isMoveBlendRatioStill(moveBlendRatio: number): boolean {
	const isMoveBlendRatioStill_result = Citizen.invokeNative<boolean>('0xF35435F8DC034A5C', moveBlendRatio);
	return isMoveBlendRatioStill_result;
}