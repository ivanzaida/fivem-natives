/**
 * HUD:IS_MP_GAMER_TAG_FREE
 *
 * 0x7EF5C276218594E5

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @returns {boolean}  
 */
export function isMpGamerTagFree(playerNum: number): boolean {
	const isMpGamerTagFree_result = Citizen.invokeNative<boolean>('0x7EF5C276218594E5', playerNum);
	return isMpGamerTagFree_result;
}