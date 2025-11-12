import { Vector3, EntityIndex, ShapetestIndex } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * SHAPETEST:START_SHAPE_TEST_MOUSE_CURSOR_LOS_PROBE
 *
 * 0x7705F42EDD7BAD81

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * Works just like START_SHAPE_TEST_LOS_PROBE only the start and end points of the probe are calculated based on the mouse cursor position projected into the world.
 * vProbeStartPosOut and vProbeEndPosOut will be filled with the start and end points of the probe in world space.
 * 
 * Returns a ShapeTest handle that can be used with GET_SHAPE_TEST_RESULT.
 * 
 * In its only usage in game scripts its called with flag set to 511, entity to player_ped_id and flag2 set to 7
 * 
 * 
 * ------------------------------------------------------------------
 * @param {Vector3} probeStartPosOut [Ref]
 * @param {Vector3} probeEndPosOut [Ref]
 * @param {number} losFlags
 * @param {EntityIndex} excludeEntity
 * @param {number} options
 * @returns {ShapetestIndex}  
 */
export function startShapeTestMouseCursorLosProbe(probeStartPosOut: Vector3 /* ptr */, probeEndPosOut: Vector3 /* ptr */, losFlags: number = 1, excludeEntity: EntityIndex = null!, options: number = 7): ShapetestIndex {
	const probeStartPosOutPtr = new Vector3Ref();
	const probeEndPosOutPtr = new Vector3Ref();
	const startShapeTestMouseCursorLosProbe_result = Citizen.invokeNative<ShapetestIndex>('0x7705F42EDD7BAD81', probeStartPosOutPtr.dataView, probeEndPosOutPtr.dataView, losFlags, excludeEntity, options);
	probeStartPosOutPtr.copyToVector(probeStartPosOut);
	probeEndPosOutPtr.copyToVector(probeEndPosOut);
	return startShapeTestMouseCursorLosProbe_result;
}