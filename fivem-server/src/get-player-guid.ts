/**
 * CFX:GET_PLAYER_GUID
 *
 * 0xE52D9680

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {string}  
 */
export function getPlayerGuid(playerSrc: string): string {
	const getPlayerGuid_result = Citizen.invokeNative<string>('0xE52D9680', playerSrc);
	return getPlayerGuid_result;
}