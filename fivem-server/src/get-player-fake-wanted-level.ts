/**
 * CFX:GET_PLAYER_FAKE_WANTED_LEVEL
 *
 * 0x98D244

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The target player
 * @returns {number}  
 */
export function getPlayerFakeWantedLevel(playerSrc: string): number {
	const getPlayerFakeWantedLevel_result = Citizen.invokeNative<number>('0x98D244', playerSrc);
	return getPlayerFakeWantedLevel_result;
}