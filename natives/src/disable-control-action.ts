import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:DISABLE_CONTROL_ACTION
 *
 * 0x66EFB3D6110055C4

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @param {boolean} disableRelatedActions
 */
export function disableControlAction(control: EControlType | number, action: EControlAction | number, disableRelatedActions: boolean = true): void {
	const disableControlAction_result = Citizen.invokeNative<void>('0x66EFB3D6110055C4', control, action, disableRelatedActions);
	return disableControlAction_result;
}