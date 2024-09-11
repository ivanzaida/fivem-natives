import { Vector3, EElementLocBlock } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_BASE_ELEMENT_LOCATION_FROM_METADATA_BLOCK
 *
 * 0xC557C842E425A746

 * 
 * ------------------------------------------------------------------
 * @param {Vector3} outLocation [Ref]
 * @param {Vector3} outRotation [Ref]
 * @param {number} element
 * @param {EElementLocBlock} block
 * @returns {boolean}  
 */
export function getBaseElementLocationFromMetadataBlock(outLocation: Vector3 /* ptr */, outRotation: Vector3 /* ptr */, element: number, block: EElementLocBlock | number): boolean {
	const outLocationPtr = new Vector3Ref();
	const outRotationPtr = new Vector3Ref();
	const getBaseElementLocationFromMetadataBlock_result = Citizen.invokeNative<boolean>('0xC557C842E425A746', outLocationPtr.dataView, outRotationPtr.dataView, element, block);
	outLocationPtr.copyToVector(outLocation);
	outRotationPtr.copyToVector(outRotation);
	return getBaseElementLocationFromMetadataBlock_result;
}