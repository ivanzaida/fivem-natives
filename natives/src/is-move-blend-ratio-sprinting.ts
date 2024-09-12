/**
 * TASK:IS_MOVE_BLEND_RATIO_SPRINTING
 *
 * 0x77FC7BDED929C9BD

 * 
 * ------------------------------------------------------------------
 * @param {number} moveBlendRatio
 * @returns {boolean}  
 */
export function isMoveBlendRatioSprinting(moveBlendRatio: number): boolean {
	const isMoveBlendRatioSprinting_result = Citizen.invokeNative<boolean>('0x77FC7BDED929C9BD', moveBlendRatio);
	return isMoveBlendRatioSprinting_result;
}