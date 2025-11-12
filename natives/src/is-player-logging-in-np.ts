/**
 * PLAYER:IS_PLAYER_LOGGING_IN_NP
 *
 * 0x54A2F9B7AD878EB5

 * 
 * If this returns true,IS_PLAYER_ONLINE_NP() will return false because, although the player is logged in, he's not fully connected to all necessary back end services, and therefore not online.
 * 
 * this function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPlayerLoggingInNp(): boolean {
	const isPlayerLoggingInNp_result = Citizen.invokeNative<boolean>('0x54A2F9B7AD878EB5', );
	return isPlayerLoggingInNp_result;
}