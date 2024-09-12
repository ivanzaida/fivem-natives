import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_REMOVE
 *
 * 0x97AC7D93ABD65D96

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @returns {boolean}  
 */
export function decorRemove(guid: ItemIndex, decoratorName: string): boolean {
	const decorRemove_result = Citizen.invokeNative<boolean>('0x97AC7D93ABD65D96', guid, decoratorName);
	return decorRemove_result;
}