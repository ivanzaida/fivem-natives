/**
 * NETWORK:IS_SPHERE_VISIBLE_TO_ANOTHER_MACHINE
 *
 * 0x809E97B5B52A6418

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isSphereVisibleToAnotherMachine(posX: number, posY: number, posZ: number, radius: number): boolean {
	const isSphereVisibleToAnotherMachine_result = Citizen.invokeNative<boolean>('0x809E97B5B52A6418', posX, posY, posZ, radius);
	return isSphereVisibleToAnotherMachine_result;
}