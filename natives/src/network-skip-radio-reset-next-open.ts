/**
 * NETWORK:NETWORK_SKIP_RADIO_RESET_NEXT_OPEN
 *
 * 0x7EF7ABCDDEEEB7C0

 * 
 * Specifies that the radio should not be reset for multiplayer the next time the network is opened
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSkipRadioResetNextOpen(): void {
	const networkSkipRadioResetNextOpen_result = Citizen.invokeNative<void>('0x7EF7ABCDDEEEB7C0', );
	return networkSkipRadioResetNextOpen_result;
}