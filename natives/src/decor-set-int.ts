import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_SET_INT
 *
 * 0xEE8559BBFC27701B

 * 
 * Sets property to int.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @param {number} value
 * @returns {boolean}  
 */
export function decorSetInt(guid: ItemIndex, decoratorName: string, value: number): boolean {
	const decorSetInt_result = Citizen.invokeNative<boolean>('0xEE8559BBFC27701B', guid, decoratorName, value);
	return decorSetInt_result;
}