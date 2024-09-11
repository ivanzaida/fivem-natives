/**
 * TASK:IS_MOVE_BLEND_RATIO_WALKING
 *
 * 0xF6F7567DC74C45CE

 * 
 * ------------------------------------------------------------------
 * @param {number} moveBlendRatio
 * @returns {boolean}  
 */
export function isMoveBlendRatioWalking(moveBlendRatio: number): boolean {
	const isMoveBlendRatioWalking_result = Citizen.invokeNative<boolean>('0xF6F7567DC74C45CE', moveBlendRatio);
	return isMoveBlendRatioWalking_result;
}