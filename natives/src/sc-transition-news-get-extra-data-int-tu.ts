import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_TRANSITION_NEWS_GET_EXTRA_DATA_INT_TU
 *
 * 0xACB8B29F6BEB8B58

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {IntRef} value [Ref]
 * @returns {boolean}  
 */
export function scTransitionNewsGetExtraDataIntTu(name: string, value: IntRef /* ptr */): boolean {
	const scTransitionNewsGetExtraDataIntTu_result = Citizen.invokeNative<boolean>('0xACB8B29F6BEB8B58', name, value.dataView);
	return scTransitionNewsGetExtraDataIntTu_result;
}