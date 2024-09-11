import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:PASS_KEYBOARD_INPUT_TO_SCALEFORM
 *
 * 0x026879F0D0AF82C3

 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @returns {boolean}  
 */
export function passKeyboardInputToScaleform(scaleformMovieId: ScaleformIndex): boolean {
	const passKeyboardInputToScaleform_result = Citizen.invokeNative<boolean>('0x026879F0D0AF82C3', scaleformMovieId);
	return passKeyboardInputToScaleform_result;
}