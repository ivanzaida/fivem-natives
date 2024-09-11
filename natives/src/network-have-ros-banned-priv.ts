/**
 * NETWORK:NETWORK_HAVE_ROS_BANNED_PRIV
 *
 * 0xF4260C5C733DA1CB

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveRosBannedPriv(): boolean {
	const networkHaveRosBannedPriv_result = Citizen.invokeNative<boolean>('0xF4260C5C733DA1CB', );
	return networkHaveRosBannedPriv_result;
}