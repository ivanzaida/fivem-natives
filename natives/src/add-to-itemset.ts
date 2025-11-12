import { ItemIndex, ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:ADD_TO_ITEMSET
 *
 * 0x28458D567A56CEFC

 * 
 * Each item can only be in the set once, an error will be generated otherwise. Returns TRUE on success.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} itemToAdd
 * @param {ItemsetIndex} itemSetToAddTo
 * @returns {boolean}  
 */
export function addToItemset(itemToAdd: ItemIndex, itemSetToAddTo: ItemsetIndex): boolean {
	const addToItemset_result = Citizen.invokeNative<boolean>('0x28458D567A56CEFC', itemToAdd, itemSetToAddTo);
	return addToItemset_result;
}