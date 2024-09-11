/**
 * CFX:SET_AUDIO_SUBMIX_EFFECT_PARAM_INT
 *
 * 0X77FAE2B8

 * Sets an integer parameter for a submix effect.
 * 
 * ------------------------------------------------------------------
 * @param {number} submixId The submix.
 * @param {number} effectSlot The effect slot for the submix. It is expected that the effect is set in this slot beforehand.
 * @param {number} paramIndex The parameter index for the effect.
 * @param {number} paramValue The parameter value to set.
 */
export function setAudioSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
	const setAudioSubmixEffectParamInt_result = Citizen.invokeNative<void>('0X77FAE2B8', submixId, effectSlot, paramIndex, paramValue);
	return setAudioSubmixEffectParamInt_result;
}