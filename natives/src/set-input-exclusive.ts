import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:SET_INPUT_EXCLUSIVE
 *
 * 0x4CC1CF98851922CE

 * 
 * Sets an input to recieve exclusive input for 1 frame only. This will disable all inputs that
 * are associated to the same buttons except for this one.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 */
export function setInputExclusive(control: EControlType | number, action: EControlAction | number): void {
	const setInputExclusive_result = Citizen.invokeNative<void>('0x4CC1CF98851922CE', control, action);
	return setInputExclusive_result;
}