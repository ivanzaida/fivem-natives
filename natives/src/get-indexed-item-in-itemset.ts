import { ItemsetIndex, ItemIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:GET_INDEXED_ITEM_IN_ITEMSET
 *
 * 0xC7CE1F723246133A

 * 
 * Use NATIVE_TO_INT and INT_TO_NATIVE if you need to convert this to an ENTITY_INDEX, PED_INDEX, etc.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} indexInSet
 * @param {ItemsetIndex} itemSet
 * @returns {ItemIndex}  
 */
export function getIndexedItemInItemset(indexInSet: number, itemSet: ItemsetIndex): ItemIndex {
	const getIndexedItemInItemset_result = Citizen.invokeNative<ItemIndex>('0xC7CE1F723246133A', indexInSet, itemSet);
	return getIndexedItemInItemset_result;
}