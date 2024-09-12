import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_GET_BOOL
 *
 * 0x3F40AE65F056B43D

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @returns {boolean}  
 */
export function decorGetBool(guid: ItemIndex, decoratorName: string): boolean {
	const decorGetBool_result = Citizen.invokeNative<boolean>('0x3F40AE65F056B43D', guid, decoratorName);
	return decorGetBool_result;
}