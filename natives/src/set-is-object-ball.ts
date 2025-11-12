import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_IS_OBJECT_BALL
 *
 * 0x09D0318A9D395CB5

 * 
 * Sets whether an object is going to be used as a ball
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} isBall
 */
export function setIsObjectBall(object: ObjectIndex, isBall: boolean): void {
	const setIsObjectBall_result = Citizen.invokeNative<void>('0x09D0318A9D395CB5', object, isBall);
	return setIsObjectBall_result;
}