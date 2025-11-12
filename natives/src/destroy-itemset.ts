import { ItemsetIndex } from '@ivanzaida/structures'

/**
 * ITEMSET:DESTROY_ITEMSET
 *
 * 0x2BDB03D2AA09D565

 * 
 * The set members are unaffected, not destroyed by this command.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ItemsetIndex} itemSet
 */
export function destroyItemset(itemSet: ItemsetIndex): void {
	const destroyItemset_result = Citizen.invokeNative<void>('0x2BDB03D2AA09D565', itemSet);
	return destroyItemset_result;
}