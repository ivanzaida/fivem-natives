import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_EXIST_ON
 *
 * 0xD130E7CDEE903624

 * 
 * Returns whether or not the specified property is set for the entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @returns {boolean}  
 */
export function decorExistOn(guid: ItemIndex, decoratorName: string): boolean {
	const decorExistOn_result = Citizen.invokeNative<boolean>('0xD130E7CDEE903624', guid, decoratorName);
	return decorExistOn_result;
}