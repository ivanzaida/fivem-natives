import { InteriorInstanceIndex, Vector3, IntRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * INTERIOR:GET_INTERIOR_LOCATION_AND_NAMEHASH
 *
 * 0x97A631B5F81A6197

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {Vector3} position [Ref]
 * @param {IntRef} nameHash [Ref]
 */
export function getInteriorLocationAndNamehash(interiorInstance: InteriorInstanceIndex, position: Vector3 /* ptr */, nameHash: IntRef /* ptr */): void {
	const positionPtr = new Vector3Ref();
	const getInteriorLocationAndNamehash_result = Citizen.invokeNative<void>('0x97A631B5F81A6197', interiorInstance, positionPtr.dataView, nameHash.dataView);
	positionPtr.copyToVector(position);
	return getInteriorLocationAndNamehash_result;
}