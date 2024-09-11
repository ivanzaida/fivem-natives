/**
 * CFX:GET_WEAPON_COMPONENT_CLIP_SIZE
 *
 * 0XE14CF665

 * A getter for `ClipSize` in a weapon component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  A weapon component clip size.
 */
export function getWeaponComponentClipSize(componentHash: number): number {
	const getWeaponComponentClipSize_result = Citizen.invokeNative<number>('0XE14CF665', componentHash);
	return getWeaponComponentClipSize_result;
}