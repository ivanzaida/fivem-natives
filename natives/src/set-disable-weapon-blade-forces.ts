/**
 * VEHICLE:SET_DISABLE_WEAPON_BLADE_FORCES
 *
 * 0x4F80CD41C0C6F1E3

 * 
 * Sets some global vehicle related bool
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} disableBladeForce
 */
export function setDisableWeaponBladeForces(disableBladeForce: boolean): void {
	const setDisableWeaponBladeForces_result = Citizen.invokeNative<void>('0x4F80CD41C0C6F1E3', disableBladeForce);
	return setDisableWeaponBladeForces_result;
}