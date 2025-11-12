import { ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:CLEAN_ITEMSET
 *
 * 0x6C123E50989D9F3C

 * 
 * Generally not needed if using the autoClean option with CREATE_ITEMSET.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemsetIndex} itemSet
 */
export function cleanItemset(itemSet: ItemsetIndex): void {
	const cleanItemset_result = Citizen.invokeNative<void>('0x6C123E50989D9F3C', itemSet);
	return cleanItemset_result;
}