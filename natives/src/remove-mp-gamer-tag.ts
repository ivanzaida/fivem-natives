/**
 * HUD:REMOVE_MP_GAMER_TAG
 *
 * 0xA18D0B8D61E559A0

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 */
export function removeMpGamerTag(playerNum: number): void {
	const removeMpGamerTag_result = Citizen.invokeNative<void>('0xA18D0B8D61E559A0', playerNum);
	return removeMpGamerTag_result;
}