/**
 * CFX:TEMP_BAN_PLAYER
 *
 * 0X1E35DBBA

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @param {string} reason
 */
export function tempBanPlayer(playerSrc: string, reason: string): void {
	const tempBanPlayer_result = Citizen.invokeNative<void>('0X1E35DBBA', playerSrc, reason);
	return tempBanPlayer_result;
}