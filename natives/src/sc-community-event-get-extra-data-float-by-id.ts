import { FloatRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT_BY_ID
 *
 * 0x80C6F609D860930C

 * 
 * ------------------------------------------------------------------
 * @param {number} eventId
 * @param {string} name
 * @param {FloatRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataFloatById(eventId: number, name: string, value: FloatRef /* ptr */): boolean {
	const scCommunityEventGetExtraDataFloatById_result = Citizen.invokeNative<boolean>('0x80C6F609D860930C', eventId, name, value.dataView);
	return scCommunityEventGetExtraDataFloatById_result;
}