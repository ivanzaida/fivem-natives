/**
 * STATS:PLAYSTATS_FRIEND_ACTIVITY
 *
 * 0x52BD224DF16926E9

 * 
 * ------------------------------------------------------------------
 * @param {number} char
 * @param {number} outcome
 */
export function playstatsFriendActivity(char: number, outcome: number): void {
	const playstatsFriendActivity_result = Citizen.invokeNative<void>('0x52BD224DF16926E9', char, outcome);
	return playstatsFriendActivity_result;
}