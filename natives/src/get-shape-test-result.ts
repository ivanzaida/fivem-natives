import { ShapetestIndex, IntRef, Vector3, EShapetestStatus } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * SHAPETEST:GET_SHAPE_TEST_RESULT
 *
 * 0x0E7DD1EBCA8D2DE3

 * 
 * The shapetest request is destroyed by this call if SHAPETEST_STATUS_RESULTS_READY is returned.
 * If this is not called every frame then the request will be destroyed
 * 
 * Returns the result of a shape test: 0 if the handle is invalid, 1 if the shape test is still pending, or 2 if the shape test has completed, and the handle should be invalidated.
 * 
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ShapetestIndex} shapeTestGuid
 * @param {IntRef} hitSomething [Ref]
 * @param {Vector3} pos [Ref]
 * @param {Vector3} normal [Ref]
 * @param {IntRef} entity [Ref]
 * @returns {EShapetestStatus}  
 */
export function getShapeTestResult(shapeTestGuid: ShapetestIndex, hitSomething: IntRef /* ptr */, pos: Vector3 /* ptr */, normal: Vector3 /* ptr */, entity: IntRef /* ptr */): EShapetestStatus {
	const posPtr = new Vector3Ref();
	const normalPtr = new Vector3Ref();
	const getShapeTestResult_result = Citizen.invokeNative<EShapetestStatus>('0x0E7DD1EBCA8D2DE3', shapeTestGuid, hitSomething.dataView, posPtr.dataView, normalPtr.dataView, entity.dataView);
	posPtr.copyToVector(pos);
	normalPtr.copyToVector(normal);
	return getShapeTestResult_result;
}