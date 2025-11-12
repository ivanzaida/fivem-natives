/**
 * NETWORK:NETWORK_SKIP_RADIO_RESET_NEXT_CLOSE
 *
 * 0xDC5F81D7F618A8A6

 * 
 * Specifies that the radio should not be reset for singleplayer the next time the network is closed; ie script is going straight back into MP
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSkipRadioResetNextClose(): void {
	const networkSkipRadioResetNextClose_result = Citizen.invokeNative<void>('0xDC5F81D7F618A8A6', );
	return networkSkipRadioResetNextClose_result;
}