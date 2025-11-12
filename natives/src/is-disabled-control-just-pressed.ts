import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_DISABLED_CONTROL_JUST_PRESSED
 *
 * 0xDEE3EFEA31A1F555

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isDisabledControlJustPressed(control: EControlType | number, action: EControlAction | number): boolean {
	const isDisabledControlJustPressed_result = Citizen.invokeNative<boolean>('0xDEE3EFEA31A1F555', control, action);
	return isDisabledControlJustPressed_result;
}