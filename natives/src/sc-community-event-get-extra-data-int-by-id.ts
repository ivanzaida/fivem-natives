import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT_BY_ID
 *
 * 0x72930FB68F9B4179

 * 
 * ------------------------------------------------------------------
 * @param {number} eventId
 * @param {string} name
 * @param {IntRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataIntById(eventId: number, name: string, value: IntRef /* ptr */): boolean {
	const scCommunityEventGetExtraDataIntById_result = Citizen.invokeNative<boolean>('0x72930FB68F9B4179', eventId, name, value.dataView);
	return scCommunityEventGetExtraDataIntById_result;
}