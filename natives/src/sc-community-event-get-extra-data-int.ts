import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT
 *
 * 0xDBAD1B5E0100936B

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {IntRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataInt(name: string, value: IntRef /* ptr */): boolean {
	const scCommunityEventGetExtraDataInt_result = Citizen.invokeNative<boolean>('0xDBAD1B5E0100936B', name, value.dataView);
	return scCommunityEventGetExtraDataInt_result;
}