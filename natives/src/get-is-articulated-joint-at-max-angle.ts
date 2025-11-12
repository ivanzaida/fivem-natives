import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_IS_ARTICULATED_JOINT_AT_MAX_ANGLE
 *
 * 0xA06DCC0EBCEFF7EA

 * 
 * Returns true if the joint in the object is at its maximum angle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} joint
 * @returns {boolean}  
 */
export function getIsArticulatedJointAtMaxAngle(object: ObjectIndex, joint: number = 0): boolean {
	const getIsArticulatedJointAtMaxAngle_result = Citizen.invokeNative<boolean>('0xA06DCC0EBCEFF7EA', object, joint);
	return getIsArticulatedJointAtMaxAngle_result;
}