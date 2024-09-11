import { ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:IS_ITEMSET_VALID
 *
 * 0x3A05653FFCBAFB55

 * 
 * ------------------------------------------------------------------
 * @param {ItemsetIndex} itemSet
 * @returns {boolean}  
 */
export function isItemsetValid(itemSet: ItemsetIndex): boolean {
	const isItemsetValid_result = Citizen.invokeNative<boolean>('0x3A05653FFCBAFB55', itemSet);
	return isItemsetValid_result;
}