import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_IS_ARTICULATED_JOINT_AT_MIN_ANGLE
 *
 * 0xD935AEB5CFA7FA1B

 * 
 * Returns true if the joint in the object is at its minimum angle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} joint
 * @returns {boolean}  
 */
export function getIsArticulatedJointAtMinAngle(object: ObjectIndex, joint: number = 0): boolean {
	const getIsArticulatedJointAtMinAngle_result = Citizen.invokeNative<boolean>('0xD935AEB5CFA7FA1B', object, joint);
	return getIsArticulatedJointAtMinAngle_result;
}