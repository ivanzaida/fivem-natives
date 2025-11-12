/**
 * AUDIO:OVERRIDE_TREVOR_RAGE
 *
 * 0xFABB7252CDD75478

 * 
 * This native enables the audio flag "TrevorRageIsOverridden" and sets the voice effect to `voiceEffect`
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} context
 */
export function overrideTrevorRage(context: string): void {
	const overrideTrevorRage_result = Citizen.invokeNative<void>('0xFABB7252CDD75478', context);
	return overrideTrevorRage_result;
}