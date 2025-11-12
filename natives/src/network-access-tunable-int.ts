import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_INT
 *
 * 0xBB4032866B475D96

 * 
 * Retrieves the tunable (szTunableName) in context (szContext)
 * For FLOAT and INT, the value will be stored in the nTunable / fTunable variables. The return value
 * indicates whether the variable exists. We cannot pass bools by references so the bool value is just
 * returned. Use NETWORK_DOES_TUNABLE_EXIST if you want to check if a BOOL tunable exists.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szContext
 * @param {string} szTunableName
 * @param {IntRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableInt(szContext: string, szTunableName: string, tunable: IntRef /* ptr */): boolean {
	const networkAccessTunableInt_result = Citizen.invokeNative<boolean>('0xBB4032866B475D96', szContext, szTunableName, tunable.dataView);
	return networkAccessTunableInt_result;
}