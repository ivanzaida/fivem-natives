/**
 * CFX:SET_GAME_TYPE
 *
 * 0xF90B7469

 * 
 * ------------------------------------------------------------------
 * @param {string} gametypeName
 */
export function setGameType(gametypeName: string): void {
	const setGameType_result = Citizen.invokeNative<void>('0xF90B7469', gametypeName);
	return setGameType_result;
}