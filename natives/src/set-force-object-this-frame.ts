/**
 * OBJECT:SET_FORCE_OBJECT_THIS_FRAME
 *
 * 0x320BC441CADA2E79

 * 
 * Call each frame to (a) prevent intersecting dynamic objects from reverting to dummy
 * state and (b) promote intersecting dummy objects to real dynamic object state even if it is out of range
 * forces any dummy objects in the specified volume to become real dynamic objects
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 */
export function setForceObjectThisFrame(posX: number, posY: number, posZ: number, radius: number): void {
	const setForceObjectThisFrame_result = Citizen.invokeNative<void>('0x320BC441CADA2E79', posX, posY, posZ, radius);
	return setForceObjectThisFrame_result;
}