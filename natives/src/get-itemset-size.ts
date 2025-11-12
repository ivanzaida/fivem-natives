import { ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:GET_ITEMSET_SIZE
 *
 * 0xED06F75C0AB45AAA

 * 
 * If auto-cleaning, invalid items will get cleaned up first.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemsetIndex} itemSet
 * @returns {number}  
 */
export function getItemsetSize(itemSet: ItemsetIndex): number {
	const getItemsetSize_result = Citizen.invokeNative<number>('0xED06F75C0AB45AAA', itemSet);
	return getItemsetSize_result;
}