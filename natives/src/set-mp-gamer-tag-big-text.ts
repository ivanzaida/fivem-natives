/**
 * HUD:SET_MP_GAMER_TAG_BIG_TEXT
 *
 * 0xB418E0AF8C61B56D

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {string} bigText
 */
export function setMpGamerTagBigText(playerNum: number, bigText: string): void {
	const setMpGamerTagBigText_result = Citizen.invokeNative<void>('0xB418E0AF8C61B56D', playerNum, bigText);
	return setMpGamerTagBigText_result;
}