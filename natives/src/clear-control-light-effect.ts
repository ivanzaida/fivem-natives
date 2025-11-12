import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:CLEAR_CONTROL_LIGHT_EFFECT
 *
 * 0x9882AC0599785A65

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 */
export function clearControlLightEffect(control: EControlType | number): void {
	const clearControlLightEffect_result = Citizen.invokeNative<void>('0x9882AC0599785A65', control);
	return clearControlLightEffect_result;
}