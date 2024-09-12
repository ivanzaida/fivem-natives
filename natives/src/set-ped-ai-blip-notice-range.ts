import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_AI_BLIP_NOTICE_RANGE
 *
 * 0x9FFBD1A17AAE3E0D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} range
 */
export function setPedAiBlipNoticeRange(ped: PedIndex, range: number): void {
	const setPedAiBlipNoticeRange_result = Citizen.invokeNative<void>('0x9FFBD1A17AAE3E0D', ped, range);
	return setPedAiBlipNoticeRange_result;
}