import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_DISABLED_CONTROL_JUST_RELEASED
 *
 * 0x61C3701AD6D746B2

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isDisabledControlJustReleased(control: EControlType | number, action: EControlAction | number): boolean {
	const isDisabledControlJustReleased_result = Citizen.invokeNative<boolean>('0x61C3701AD6D746B2', control, action);
	return isDisabledControlJustReleased_result;
}