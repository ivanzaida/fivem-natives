/**
 * NETWORK:NETWORK_CLEAR_VOICE_PROXIMITY_OVERRIDE
 *
 * 0x25290320BF2D9807

 * 
 * ------------------------------------------------------------------
 */
export function networkClearVoiceProximityOverride(): void {
	const networkClearVoiceProximityOverride_result = Citizen.invokeNative<void>('0x25290320BF2D9807', );
	return networkClearVoiceProximityOverride_result;
}