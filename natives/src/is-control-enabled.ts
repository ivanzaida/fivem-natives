import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_CONTROL_ENABLED
 *
 * 0x5CCBA474776568B7

 * 
 * control: 0: PLAYER_CONTROL, 1: CAMERA_CONTROL, 2: FRONTEND_CONTROL
 * For more info, see https://docs.fivem.net/docs/game-references/controls/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isControlEnabled(control: EControlType | number, action: EControlAction | number): boolean {
	const isControlEnabled_result = Citizen.invokeNative<boolean>('0x5CCBA474776568B7', control, action);
	return isControlEnabled_result;
}