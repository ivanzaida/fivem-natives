/**
 * HUD:SET_MP_GAMER_TAG_NUM_PACKAGES
 *
 * 0x54BD99D8318FB02A

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {number} numPackages
 */
export function setMpGamerTagNumPackages(playerNum: number, numPackages: number): void {
	const setMpGamerTagNumPackages_result = Citizen.invokeNative<void>('0x54BD99D8318FB02A', playerNum, numPackages);
	return setMpGamerTagNumPackages_result;
}