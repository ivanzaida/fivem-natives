import { ItemIndex, TimeDatatype } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_SET_TIME
 *
 * 0xD54324BF37C12BEE

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @param {TimeDatatype} value
 * @returns {boolean}  
 */
export function decorSetTime(guid: ItemIndex, decoratorName: string, value: TimeDatatype): boolean {
	const decorSetTime_result = Citizen.invokeNative<boolean>('0xD54324BF37C12BEE', guid, decoratorName, value);
	return decorSetTime_result;
}