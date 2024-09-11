/**
 * NETWORK:NETWORK_SESSION_LEAVE_SINGLE_PLAYER
 *
 * 0x566589BD8D826713

 * 
 * ------------------------------------------------------------------
 */
export function networkSessionLeaveSinglePlayer(): void {
	const networkSessionLeaveSinglePlayer_result = Citizen.invokeNative<void>('0x566589BD8D826713', );
	return networkSessionLeaveSinglePlayer_result;
}