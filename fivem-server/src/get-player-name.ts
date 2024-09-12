/**
 * CFX:GET_PLAYER_NAME
 *
 * 0x406B4B20

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {string}  
 */
export function getPlayerName(playerSrc: string): string {
	const getPlayerName_result = Citizen.invokeNative<string>('0x406B4B20', playerSrc);
	return getPlayerName_result;
}