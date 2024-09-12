/**
 * CFX:GET_PLAYER_ENDPOINT
 *
 * 0XFEE404F9

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {string}  
 */
export function getPlayerEndpoint(playerSrc: string): string {
	const getPlayerEndpoint_result = Citizen.invokeNative<string>('0XFEE404F9', playerSrc);
	return getPlayerEndpoint_result;
}