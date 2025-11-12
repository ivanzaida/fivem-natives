import { ObjectIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_DRIVE_ARTICULATED_JOINT_WITH_INFLICTOR
 *
 * 0x3BC4D68025ED9B51

 * 
 * Same as the above function but allows the setting of an inflcitor for damage events
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} driveOpen
 * @param {number} joint
 * @param {EntityIndex} inflictor
 */
export function setDriveArticulatedJointWithInflictor(object: ObjectIndex, driveOpen: boolean, joint: number, inflictor: EntityIndex): void {
	const setDriveArticulatedJointWithInflictor_result = Citizen.invokeNative<void>('0x3BC4D68025ED9B51', object, driveOpen, joint, inflictor);
	return setDriveArticulatedJointWithInflictor_result;
}