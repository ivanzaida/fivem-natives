/**
 * HUD:SET_ALL_MP_GAMER_TAGS_VISIBILITY
 *
 * 0xB38A588ED5C50BBD

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {boolean} visible
 */
export function setAllMpGamerTagsVisibility(playerNum: number, visible: boolean): void {
	const setAllMpGamerTagsVisibility_result = Citizen.invokeNative<void>('0xB38A588ED5C50BBD', playerNum, visible);
	return setAllMpGamerTagsVisibility_result;
}