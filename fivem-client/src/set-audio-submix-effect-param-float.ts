/**
 * CFX:SET_AUDIO_SUBMIX_EFFECT_PARAM_FLOAT
 *
 * 0X9A209B3C

 * Sets a floating-point parameter for a submix effect.
 * 
 * ------------------------------------------------------------------
 * @param {number} submixId The submix.
 * @param {number} effectSlot The effect slot for the submix. It is expected that the effect is set in this slot beforehand.
 * @param {number} paramIndex The parameter index for the effect.
 * @param {number} paramValue The parameter value to set.
 */
export function setAudioSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
	const setAudioSubmixEffectParamFloat_result = Citizen.invokeNative<void>('0X9A209B3C', submixId, effectSlot, paramIndex, paramValue);
	return setAudioSubmixEffectParamFloat_result;
}