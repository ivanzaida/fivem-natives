import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_DRIVE_ARTICULATED_JOINT
 *
 * 0x95D654C0E9FE1D7E

 * 
 * Sets articulated objects to drive their joint open or closed
 * 
 * Activate the physics to: "xs_prop_arena_{flipper,wall,bollard,turntable,pit}"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} driveOpen
 * @param {number} joint
 */
export function setDriveArticulatedJoint(object: ObjectIndex, driveOpen: boolean, joint: number = 0): void {
	const setDriveArticulatedJoint_result = Citizen.invokeNative<void>('0x95D654C0E9FE1D7E', object, driveOpen, joint);
	return setDriveArticulatedJoint_result;
}