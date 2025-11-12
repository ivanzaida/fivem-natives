/**
 * HUD:HUD_FORCE_SPECIAL_VEHICLE_WEAPON_WHEEL
 *
 * 0x5809BD29D4D1392D

 * 
 * Displays "blazer_wheels_up" and "blazer_wheels_down" "weapon" icons when switching between jetski and quadbike modes. Works only on vehicles using "VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE" vehicle type. Needs to be called every time prior to switching modes, otherwise the icon will only appear when switching modes once.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function hudForceSpecialVehicleWeaponWheel(): void {
	const hudForceSpecialVehicleWeaponWheel_result = Citizen.invokeNative<void>('0x5809BD29D4D1392D', );
	return hudForceSpecialVehicleWeaponWheel_result;
}