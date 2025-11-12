import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_SET_BOOL
 *
 * 0xF46ECFD5526E8FF7

 * 
 * This function sets metadata of type bool to specified entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @param {boolean} value
 * @returns {boolean}  
 */
export function decorSetBool(guid: ItemIndex, decoratorName: string, value: boolean): boolean {
	const decorSetBool_result = Citizen.invokeNative<boolean>('0xF46ECFD5526E8FF7', guid, decoratorName, value);
	return decorSetBool_result;
}