import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_SET_FLOAT
 *
 * 0x2475DDACFF83CF93

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @param {number} value
 * @returns {boolean}  
 */
export function decorSetFloat(guid: ItemIndex, decoratorName: string, value: number): boolean {
	const decorSetFloat_result = Citizen.invokeNative<boolean>('0x2475DDACFF83CF93', guid, decoratorName, value);
	return decorSetFloat_result;
}