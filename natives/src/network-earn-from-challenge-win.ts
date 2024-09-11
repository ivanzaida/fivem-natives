/**
 * MONEY:NETWORK_EARN_FROM_CHALLENGE_WIN
 *
 * 0x736F26192289EEBB

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} playlistId
 * @param {boolean} headToHead
 */
export function networkEarnFromChallengeWin(amount: number, playlistId: string, headToHead: boolean): void {
	const networkEarnFromChallengeWin_result = Citizen.invokeNative<void>('0x736F26192289EEBB', amount, playlistId, headToHead);
	return networkEarnFromChallengeWin_result;
}