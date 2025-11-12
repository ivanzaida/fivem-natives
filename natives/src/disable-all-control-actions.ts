import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:DISABLE_ALL_CONTROL_ACTIONS
 *
 * 0xD4510218399ED105

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 */
export function disableAllControlActions(control: EControlType | number): void {
	const disableAllControlActions_result = Citizen.invokeNative<void>('0xD4510218399ED105', control);
	return disableAllControlActions_result;
}