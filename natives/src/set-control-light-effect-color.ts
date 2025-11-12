import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:SET_CONTROL_LIGHT_EFFECT_COLOR
 *
 * 0x5806B70875E083E0

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setControlLightEffectColor(control: EControlType | number, red: number, green: number, blue: number): void {
	const setControlLightEffectColor_result = Citizen.invokeNative<void>('0x5806B70875E083E0', control, red, green, blue);
	return setControlLightEffectColor_result;
}