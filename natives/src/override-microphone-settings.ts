/**
 * AUDIO:OVERRIDE_MICROPHONE_SETTINGS
 *
 * 0x2F0605DFDF7593AB

 * 
 * Sets audio flag "OverrideMicrophoneSettings"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} overriddenMicSettingsHash
 * @param {boolean} scriptOverrides
 */
export function overrideMicrophoneSettings(overriddenMicSettingsHash: number, scriptOverrides: boolean): void {
	const overrideMicrophoneSettings_result = Citizen.invokeNative<void>('0x2F0605DFDF7593AB', overriddenMicSettingsHash, scriptOverrides);
	return overrideMicrophoneSettings_result;
}