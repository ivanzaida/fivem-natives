/**
 * CFX:GET_WEAPON_COMPONENT_RETICULE_HASH
 *
 * 0XF9AB9297

 * A getter for `ReticuleHash` in a weapon scope component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  The hash of the reticule camera.
 */
export function getWeaponComponentReticuleHash(componentHash: number): number {
	const getWeaponComponentReticuleHash_result = Citizen.invokeNative<number>('0XF9AB9297', componentHash);
	return getWeaponComponentReticuleHash_result;
}