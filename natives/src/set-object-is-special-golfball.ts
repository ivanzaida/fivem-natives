import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_IS_SPECIAL_GOLFBALL
 *
 * 0x7D8D470E05A35981

 * 
 * Marks object as 'golf ball' - which causes it to run some alternate
 * or extra physics to deal with the small scale (Particularly for rolling)
 * Currently pretty hacky and directly targeted at golf balls interacting at putting level velocities
 * Ask code about this before using it (Robert Percival)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} isGolfBall
 */
export function setObjectIsSpecialGolfball(object: ObjectIndex, isGolfBall: boolean = true): void {
	const setObjectIsSpecialGolfball_result = Citizen.invokeNative<void>('0x7D8D470E05A35981', object, isGolfBall);
	return setObjectIsSpecialGolfball_result;
}