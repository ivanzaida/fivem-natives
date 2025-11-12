import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:HAVE_CONTROLS_CHANGED
 *
 * 0x7811C74D5B749F76

 * 
 * Returns true if controls have changed since the last call to this function, this can happen if the user changes their control options,
 * switches between FPS and TPS mode, or between gamepad and keyboard/mouse.
 * 
 * control: unused parameter
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @returns {boolean}  
 */
export function haveControlsChanged(control: EControlType | number): boolean {
	const haveControlsChanged_result = Citizen.invokeNative<boolean>('0x7811C74D5B749F76', control);
	return haveControlsChanged_result;
}