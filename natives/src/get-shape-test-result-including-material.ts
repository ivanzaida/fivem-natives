import { ShapetestIndex, IntRef, Vector3, EShapetestStatus } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * SHAPETEST:GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL
 *
 * 0xEE92B4A78668B1CE

 * 
 * The shapetest request is destroyed by this call if SHAPETEST_STATUS_RESULTS_READY is returned.
 * If this is not called every frame then the request will be destroyed.
 * 
 * Returns the result of a shape test, also returning the material of any touched surface.
 * 
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 * 
 * Unless the return value is 2, the other return values are undefined.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ShapetestIndex} shapeTestGuid
 * @param {IntRef} hitSomething [Ref]
 * @param {Vector3} ps [Ref]
 * @param {Vector3} normal [Ref]
 * @param {IntRef} material [Ref]
 * @param {IntRef} entity [Ref]
 * @returns {EShapetestStatus}  
 */
export function getShapeTestResultIncludingMaterial(shapeTestGuid: ShapetestIndex, hitSomething: IntRef /* ptr */, ps: Vector3 /* ptr */, normal: Vector3 /* ptr */, material: IntRef /* ptr */, entity: IntRef /* ptr */): EShapetestStatus {
	const psPtr = new Vector3Ref();
	const normalPtr = new Vector3Ref();
	const getShapeTestResultIncludingMaterial_result = Citizen.invokeNative<EShapetestStatus>('0xEE92B4A78668B1CE', shapeTestGuid, hitSomething.dataView, psPtr.dataView, normalPtr.dataView, material.dataView, entity.dataView);
	psPtr.copyToVector(ps);
	normalPtr.copyToVector(normal);
	return getShapeTestResultIncludingMaterial_result;
}