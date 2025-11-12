import { EAudioSpecialEffectMode } from '@ivanzaida/structures'

/**
 * AUDIO:SET_AUDIO_SPECIAL_EFFECT_MODE
 *
 * 0xC5EE3F8EC7822462

 * 
 * Needs to be called every frame.
 * Audio mode to apply this frame: https://alloc8or.re/gta5/doc/enums/audSpecialEffectMode.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EAudioSpecialEffectMode} mode
 */
export function setAudioSpecialEffectMode(mode: EAudioSpecialEffectMode | number): void {
	const setAudioSpecialEffectMode_result = Citizen.invokeNative<void>('0xC5EE3F8EC7822462', mode);
	return setAudioSpecialEffectMode_result;
}