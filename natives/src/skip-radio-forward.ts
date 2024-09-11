/**
 * AUDIO:SKIP_RADIO_FORWARD
 *
 * 0xDB57B7ED2C49BEAD

 * 
 * ------------------------------------------------------------------
 */
export function skipRadioForward(): void {
	const skipRadioForward_result = Citizen.invokeNative<void>('0xDB57B7ED2C49BEAD', );
	return skipRadioForward_result;
}