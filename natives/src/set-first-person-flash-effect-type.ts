import { EFpsFlashType } from '@ivanzaida/structures'

/**
 * CAM:SET_FIRST_PERSON_FLASH_EFFECT_TYPE
 *
 * 0x39137FB8EE05456C

 * 
 * Must be called before RENDER_SCRIPT_CAMS(FALSE ) to change the type of the auto flash. Note that the auto flash will only
 * happen if you specify an interpolation out of 300 ms or more in your RENDER_SCRIPT_CAMS call, and the player is
 * set in first person mode.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EFpsFlashType} type
 */
export function setFirstPersonFlashEffectType(type: EFpsFlashType | number): void {
	const setFirstPersonFlashEffectType_result = Citizen.invokeNative<void>('0x39137FB8EE05456C', type);
	return setFirstPersonFlashEffectType_result;
}