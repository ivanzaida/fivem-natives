import { BwHeadhunter } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_HEAD_HUNTER
 *
 * 0xC1538E7E522A1807

 * 
 * ------------------------------------------------------------------
 * @param {BwHeadhunter} data [Ref]
 */
export function playstatsBwHeadHunter(data: BwHeadhunter /* ptr */): void {
	const playstatsBwHeadHunter_result = Citizen.invokeNative<void>('0xC1538E7E522A1807', data.dataView);
	return playstatsBwHeadHunter_result;
}