import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:ENABLE_CONTROL_ACTION
 *
 * 0xB211E45F1FE1ED2D

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @param {boolean} enableRelatedActions
 */
export function enableControlAction(control: EControlType | number, action: EControlAction | number, enableRelatedActions: boolean = true): void {
	const enableControlAction_result = Citizen.invokeNative<void>('0xB211E45F1FE1ED2D', control, action, enableRelatedActions);
	return enableControlAction_result;
}