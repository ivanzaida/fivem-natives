/**
 * NETWORK:NETWORK_DISABLE_LEAVE_REMOTE_PED_BEHIND
 *
 * 0xD8D822FF4C3DCD7D

 * 
 * Makes sure that if something happens to the local player that other machines dont leave a ped behind if
 * the connection is lost somehow with our Player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} flag
 */
export function networkDisableLeaveRemotePedBehind(flag: boolean): void {
	const networkDisableLeaveRemotePedBehind_result = Citizen.invokeNative<void>('0xD8D822FF4C3DCD7D', flag);
	return networkDisableLeaveRemotePedBehind_result;
}