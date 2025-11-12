/**
 * CFX:IS_PLAYER_IN_FREE_CAM_MODE
 *
 * 0x1F14F2AC

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to get the free camera mode status of
 * @returns {boolean}  Returns if the player is in free camera mode.
 */
export function isPlayerInFreeCamMode(playerSrc: string): boolean {
	const isPlayerInFreeCamMode_result = Citizen.invokeNative<boolean>('0x1F14F2AC', playerSrc);
	return isPlayerInFreeCamMode_result;
}