import { Vector3, FloatRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * NETWORK:NETWORK_GET_RESPAWN_RESULT
 *
 * 0x308E9BE8B02DA53E

 * 
 * Based on scripts such as in freemode.c how they call their vars vVar and fVar the 2nd and 3rd param it a Vector3 and Float, but the first is based on get_random_int_in_range..
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} result
 * @param {Vector3} outSpawnPos [Ref]
 * @param {FloatRef} outSpawnHeading [Ref]
 */
export function networkGetRespawnResult(result: number, outSpawnPos: Vector3 /* ptr */, outSpawnHeading: FloatRef /* ptr */): void {
	const outSpawnPosPtr = new Vector3Ref();
	const networkGetRespawnResult_result = Citizen.invokeNative<void>('0x308E9BE8B02DA53E', result, outSpawnPosPtr.dataView, outSpawnHeading.dataView);
	outSpawnPosPtr.copyToVector(outSpawnPos);
	return networkGetRespawnResult_result;
}