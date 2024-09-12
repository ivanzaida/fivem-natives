import { UgcDate } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_CONTENT_UPDATED_DATE
 *
 * 0x86D971EBB6E0F0AC

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {UgcDate} date [Ref]
 */
export function ugcGetContentUpdatedDate(content: number, date: UgcDate /* ptr */): void {
	const ugcGetContentUpdatedDate_result = Citizen.invokeNative<void>('0x86D971EBB6E0F0AC', content, date.dataView);
	return ugcGetContentUpdatedDate_result;
}