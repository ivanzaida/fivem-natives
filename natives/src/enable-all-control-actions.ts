import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:ENABLE_ALL_CONTROL_ACTIONS
 *
 * 0xD6D50527C75F8C6C

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 */
export function enableAllControlActions(control: EControlType | number): void {
	const enableAllControlActions_result = Citizen.invokeNative<void>('0xD6D50527C75F8C6C', control);
	return enableAllControlActions_result;
}