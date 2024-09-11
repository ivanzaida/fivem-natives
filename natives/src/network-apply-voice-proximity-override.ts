/**
 * NETWORK:NETWORK_APPLY_VOICE_PROXIMITY_OVERRIDE
 *
 * 0x1DF2F4D8E7C2CD47

 * 
 * ------------------------------------------------------------------
 * @param {number} overrideX
 * @param {number} overrideY
 * @param {number} overrideZ
 */
export function networkApplyVoiceProximityOverride(overrideX: number, overrideY: number, overrideZ: number): void {
	const networkApplyVoiceProximityOverride_result = Citizen.invokeNative<void>('0x1DF2F4D8E7C2CD47', overrideX, overrideY, overrideZ);
	return networkApplyVoiceProximityOverride_result;
}