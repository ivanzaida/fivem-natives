import { FloatRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT_FOR_TYPE
 *
 * 0x69A1136FA3794E40

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {FloatRef} value [Ref]
 * @param {string} eventType
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataFloatForType(name: string, value: FloatRef /* ptr */, eventType: string): boolean {
	const scCommunityEventGetExtraDataFloatForType_result = Citizen.invokeNative<boolean>('0x69A1136FA3794E40', name, value.dataView, eventType);
	return scCommunityEventGetExtraDataFloatForType_result;
}