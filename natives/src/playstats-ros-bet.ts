/**
 * STATS:PLAYSTATS_ROS_BET
 *
 * 0x1C55C6E8F7E0027C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} activity
 * @param {number} player
 * @param {number} commission
 */
export function playstatsRosBet(amount: number, activity: number, player: number, commission: number = 0): void {
	const playstatsRosBet_result = Citizen.invokeNative<void>('0x1C55C6E8F7E0027C', amount, activity, player, commission);
	return playstatsRosBet_result;
}