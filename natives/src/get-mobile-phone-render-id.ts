import { IntRef } from '@ivanzaida/structures'

/**
 * MOBILE:GET_MOBILE_PHONE_RENDER_ID
 *
 * 0x90D1A8814E85B166

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} render [Ref]
 */
export function getMobilePhoneRenderId(render: IntRef /* ptr */): void {
	const getMobilePhoneRenderId_result = Citizen.invokeNative<void>('0x90D1A8814E85B166', render.dataView);
	return getMobilePhoneRenderId_result;
}