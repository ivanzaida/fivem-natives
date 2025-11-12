/**
 * HUD:SET_MP_GAMER_TAG_WANTED_LEVEL
 *
 * 0x9544C7327A08C661

 * 
 * displays wanted star above head
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {number} wantedLevel
 */
export function setMpGamerTagWantedLevel(playerNum: number, wantedLevel: number): void {
	const setMpGamerTagWantedLevel_result = Citizen.invokeNative<void>('0x9544C7327A08C661', playerNum, wantedLevel);
	return setMpGamerTagWantedLevel_result;
}