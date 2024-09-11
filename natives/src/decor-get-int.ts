import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_GET_INT
 *
 * 0xE2F6FE9B61232165

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @returns {number}  
 */
export function decorGetInt(guid: ItemIndex, decoratorName: string): number {
	const decorGetInt_result = Citizen.invokeNative<number>('0xE2F6FE9B61232165', guid, decoratorName);
	return decorGetInt_result;
}