/**
 * HUD:SET_MP_GAMER_TAG_NAME
 *
 * 0xABDAD35D3277104D

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {string} playerName
 */
export function setMpGamerTagName(playerNum: number, playerName: string): void {
	const setMpGamerTagName_result = Citizen.invokeNative<void>('0xABDAD35D3277104D', playerNum, playerName);
	return setMpGamerTagName_result;
}