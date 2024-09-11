import { UgcStateUpdateData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_GET_UGCDATA
 *
 * 0x0D6C8EFC46788359

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {UgcStateUpdateData} outdata [Ref]
 * @returns {boolean}  
 */
export function scInboxMessageGetUgcdata(index: number, outdata: UgcStateUpdateData /* ptr */): boolean {
	const scInboxMessageGetUgcdata_result = Citizen.invokeNative<boolean>('0x0D6C8EFC46788359', index, outdata.dataView);
	return scInboxMessageGetUgcdata_result;
}