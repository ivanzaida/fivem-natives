import { EUgcCategory } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_CONTENT_CATEGORY
 *
 * 0x9FFE2545E71B490E

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {EUgcCategory}  
 */
export function ugcGetContentCategory(content: number): EUgcCategory {
	const ugcGetContentCategory_result = Citizen.invokeNative<EUgcCategory>('0x9FFE2545E71B490E', content);
	return ugcGetContentCategory_result;
}