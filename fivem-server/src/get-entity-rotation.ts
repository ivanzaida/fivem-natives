import { EntityIndex, EEulerRotOrder, Vector3 } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ROTATION
 *
 * 0x8FF45B04

 * The angles are between -180 and 180 not between 0 to 360
 * rotationOrder is the order yaw, pitch and roll is applied. Usually 2. Returns a vector where the Z coordinate is the yaw.
 * rotationOrder refers to the order yaw pitch roll is applied; value ranges from 0 to 5 and is usually 2 in scripts.
 * What you use for rotationOrder when getting must be the same as rotationOrder when setting the rotation.
 * What it returns is the yaw on the z part of the vector, which makes sense considering R considers z as vertical. Here's a picture for those of you who don't understand pitch, yaw, and roll: www.allstar.fiu.edu/aero/images/pic5-1.gif
 * Rotation Orders:
 * 0: ZYX - Rotate around the z-axis, then the y-axis and finally the x-axis.
 * 1: YZX - Rotate around the y-axis, then the z-axis and finally the x-axis.
 * 2: ZXY - Rotate around the z-axis, then the x-axis and finally the y-axis.
 * 3: XZY - Rotate around the x-axis, then the z-axis and finally the y-axis.
 * 4: YXZ - Rotate around the y-axis, then the x-axis and finally the z-axis.
 * 5: XYZ - Rotate around the x-axis, then the y-axis and finally the z-axis.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EEulerRotOrder} rotOrder
 * @returns {Vector3}  
 */
export function getEntityRotation(entity: EntityIndex, rotOrder: EEulerRotOrder | number = 2): Vector3 {
	const getEntityRotation_result = Citizen.invokeNative<Vector3>('0x8FF45B04', entity, rotOrder);
	return getEntityRotation_result;
}