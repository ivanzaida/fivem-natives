import { ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:CREATE_ITEMSET
 *
 * 0x5F6AD54378A3995E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} autoClean
 * @returns {ItemsetIndex}  
 */
export function createItemset(autoClean: boolean): ItemsetIndex {
	const createItemset_result = Citizen.invokeNative<ItemsetIndex>('0x5F6AD54378A3995E', autoClean);
	return createItemset_result;
}