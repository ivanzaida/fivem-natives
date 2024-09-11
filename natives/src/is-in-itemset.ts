import { ItemIndex, ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:IS_IN_ITEMSET
 *
 * 0xD0EC006D02DA188E

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} objToCheck
 * @param {ItemsetIndex} itemSet
 * @returns {boolean}  
 */
export function isInItemset(objToCheck: ItemIndex, itemSet: ItemsetIndex): boolean {
	const isInItemset_result = Citizen.invokeNative<boolean>('0xD0EC006D02DA188E', objToCheck, itemSet);
	return isInItemset_result;
}