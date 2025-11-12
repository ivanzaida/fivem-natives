import { ItemIndex, ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:REMOVE_FROM_ITEMSET
 *
 * 0xF7F5C49BCD99E28D

 * 
 * Will generate an error if the item is not in the set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} itemToRemove
 * @param {ItemsetIndex} itemSetToRemoveFrom
 */
export function removeFromItemset(itemToRemove: ItemIndex, itemSetToRemoveFrom: ItemsetIndex): void {
	const removeFromItemset_result = Citizen.invokeNative<void>('0xF7F5C49BCD99E28D', itemToRemove, itemSetToRemoveFrom);
	return removeFromItemset_result;
}