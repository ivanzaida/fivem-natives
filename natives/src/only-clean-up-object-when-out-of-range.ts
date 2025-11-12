import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:ONLY_CLEAN_UP_OBJECT_WHEN_OUT_OF_RANGE
 *
 * 0xC942CD0D37369DC4

 * 
 * when script a releases an object, it gets cleaned up automatically when a timer expires and it goes off-screen.
 * This command makes it only get cleaned up when it is far away from the player too.
 * 
 * is this like setting is as no longer needed?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function onlyCleanUpObjectWhenOutOfRange(object: ObjectIndex): void {
	const onlyCleanUpObjectWhenOutOfRange_result = Citizen.invokeNative<void>('0xC942CD0D37369DC4', object);
	return onlyCleanUpObjectWhenOutOfRange_result;
}