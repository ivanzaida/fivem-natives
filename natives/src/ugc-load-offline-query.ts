import { EUgcCategory } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_LOAD_OFFLINE_QUERY
 *
 * 0x5177CA1D97988B5C

 * 
 * ------------------------------------------------------------------
 * @param {EUgcCategory} category
 * @returns {boolean}  
 */
export function ugcLoadOfflineQuery(category: EUgcCategory | number): boolean {
	const ugcLoadOfflineQuery_result = Citizen.invokeNative<boolean>('0x5177CA1D97988B5C', category);
	return ugcLoadOfflineQuery_result;
}