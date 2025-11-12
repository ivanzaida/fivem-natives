import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_DISABLED_CONTROL_PRESSED
 *
 * 0x4465D55576678706

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isDisabledControlPressed(control: EControlType | number, action: EControlAction | number): boolean {
	const isDisabledControlPressed_result = Citizen.invokeNative<boolean>('0x4465D55576678706', control, action);
	return isDisabledControlPressed_result;
}