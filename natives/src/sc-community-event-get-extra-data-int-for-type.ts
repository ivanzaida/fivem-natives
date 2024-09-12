import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT_FOR_TYPE
 *
 * 0xFF6EC8172B647C9E

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {IntRef} value [Ref]
 * @param {string} eventType
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataIntForType(name: string, value: IntRef /* ptr */, eventType: string): boolean {
	const scCommunityEventGetExtraDataIntForType_result = Citizen.invokeNative<boolean>('0xFF6EC8172B647C9E', name, value.dataView, eventType);
	return scCommunityEventGetExtraDataIntForType_result;
}