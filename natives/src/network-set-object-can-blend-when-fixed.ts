import { ObjectIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_OBJECT_CAN_BLEND_WHEN_FIXED
 *
 * 0x40B679A9143C1CE0

 * 
 * Sets whether this script object can use the network blender on remote machines when it is fixed by network. This is only supported for
 * objects (OBJECT_INDEX) currently. This is a targeted helper native to fix syncing issues with the golf ball in GTAV. Please speak
 * to a network programmer before using this for other purposes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} canBlendWhenFixed
 */
export function networkSetObjectCanBlendWhenFixed(object: ObjectIndex, canBlendWhenFixed: boolean): void {
	const networkSetObjectCanBlendWhenFixed_result = Citizen.invokeNative<void>('0x40B679A9143C1CE0', object, canBlendWhenFixed);
	return networkSetObjectCanBlendWhenFixed_result;
}