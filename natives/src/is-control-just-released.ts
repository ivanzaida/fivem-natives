import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_CONTROL_JUST_RELEASED
 *
 * 0x2645430E708CBFAC

 * 
 * Returns whether a control was newly released since the last check.
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isControlJustReleased(control: EControlType | number, action: EControlAction | number): boolean {
	const isControlJustReleased_result = Citizen.invokeNative<boolean>('0x2645430E708CBFAC', control, action);
	return isControlJustReleased_result;
}