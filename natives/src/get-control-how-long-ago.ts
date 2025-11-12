import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:GET_CONTROL_HOW_LONG_AGO
 *
 * 0x93D020792180298F

 * 
 * Returns time in ms since last input.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @returns {number}  
 */
export function getControlHowLongAgo(control: EControlType | number): number {
	const getControlHowLongAgo_result = Citizen.invokeNative<number>('0x93D020792180298F', control);
	return getControlHowLongAgo_result;
}