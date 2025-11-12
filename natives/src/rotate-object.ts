import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:ROTATE_OBJECT
 *
 * 0x6ADCD027CA259B43

 * 
 * The object will always rotate in the direction that requires the least amount of movement.
 * This command returns TRUE when the object is at the correct rotation. If StopForCollisionFlag is TRUE then the command will also return TRUE if the object has collided with a ped or vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {number} targetRotation
 * @param {number} rotationStep
 * @param {boolean} stopForCollision
 * @returns {boolean}  
 */
export function rotateObject(objectID: ObjectIndex, targetRotation: number, rotationStep: number, stopForCollision: boolean): boolean {
	const rotateObject_result = Citizen.invokeNative<boolean>('0x6ADCD027CA259B43', objectID, targetRotation, rotationStep, stopForCollision);
	return rotateObject_result;
}