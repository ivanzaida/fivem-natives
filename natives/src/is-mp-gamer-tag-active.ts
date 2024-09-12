/**
 * HUD:IS_MP_GAMER_TAG_ACTIVE
 *
 * 0x2B627A77B9FC284E

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @returns {boolean}  
 */
export function isMpGamerTagActive(playerNum: number): boolean {
	const isMpGamerTagActive_result = Citizen.invokeNative<boolean>('0x2B627A77B9FC284E', playerNum);
	return isMpGamerTagActive_result;
}