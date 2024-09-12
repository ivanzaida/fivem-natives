import { FloatRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_FLOAT
 *
 * 0xC244AC9DF2DBD29F

 * 
 * ------------------------------------------------------------------
 * @param {string} szContext
 * @param {string} szTunableName
 * @param {FloatRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableFloat(szContext: string, szTunableName: string, tunable: FloatRef /* ptr */): boolean {
	const networkAccessTunableFloat_result = Citizen.invokeNative<boolean>('0xC244AC9DF2DBD29F', szContext, szTunableName, tunable.dataView);
	return networkAccessTunableFloat_result;
}