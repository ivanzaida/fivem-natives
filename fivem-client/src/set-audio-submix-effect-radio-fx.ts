/**
 * CFX:SET_AUDIO_SUBMIX_EFFECT_RADIO_FX
 *
 * 0XAAA94D53

 * Assigns a RadioFX effect to a submix effect slot.The parameter values for this effect are as follows (backticks are used to represent hashes):| Index | Type | Description ||-|-|-|| \`enabled\` | int | Enables or disables RadioFX on this DSP. || \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. || \`freq_low\` | float |  || \`freq_hi\` | float |  || \`fudge\` | float |  || \`rm_mod_freq\` | float |  || \`rm_mix\` | float |  || \`o_freq_lo\` | float |  || \`o_freq_hi\` | float |  |
 * 
 * ------------------------------------------------------------------
 * @param {number} submixId The submix.
 * @param {number} effectSlot The effect slot for the submix.
 */
export function setAudioSubmixEffectRadioFx(submixId: number, effectSlot: number): void {
	const setAudioSubmixEffectRadioFx_result = Citizen.invokeNative<void>('0XAAA94D53', submixId, effectSlot);
	return setAudioSubmixEffectRadioFx_result;
}