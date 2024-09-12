/**
 * NETWORK:NETWORK_HAVE_ROS_LEADERBOARD_WRITE_PRIV
 *
 * 0xAE6B753124318E29

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveRosLeaderboardWritePriv(): boolean {
	const networkHaveRosLeaderboardWritePriv_result = Citizen.invokeNative<boolean>('0xAE6B753124318E29', );
	return networkHaveRosLeaderboardWritePriv_result;
}