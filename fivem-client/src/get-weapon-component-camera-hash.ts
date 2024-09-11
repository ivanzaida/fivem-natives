/**
 * CFX:GET_WEAPON_COMPONENT_CAMERA_HASH
 *
 * 0XACB7E68F

 * A getter for `CameraHash` in a weapon scope component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  The hash of the scope camera.
 */
export function getWeaponComponentCameraHash(componentHash: number): number {
	const getWeaponComponentCameraHash_result = Citizen.invokeNative<number>('0XACB7E68F', componentHash);
	return getWeaponComponentCameraHash_result;
}