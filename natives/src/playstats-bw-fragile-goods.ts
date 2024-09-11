import { BwFragileGoods } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_FRAGILE_GOODS
 *
 * 0xEA483A47960FF65E

 * 
 * ------------------------------------------------------------------
 * @param {BwFragileGoods} data [Ref]
 */
export function playstatsBwFragileGoods(data: BwFragileGoods /* ptr */): void {
	const playstatsBwFragileGoods_result = Citizen.invokeNative<void>('0xEA483A47960FF65E', data.dataView);
	return playstatsBwFragileGoods_result;
}