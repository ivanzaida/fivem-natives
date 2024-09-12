/**
 * VEHICLE:SET_DISABLE_VEHICLE_EXPLOSIONS_DAMAGE
 *
 * 0xB3AB0B43CABD4F3E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} disableDamage
 */
export function setDisableVehicleExplosionsDamage(disableDamage: boolean): void {
	const setDisableVehicleExplosionsDamage_result = Citizen.invokeNative<void>('0xB3AB0B43CABD4F3E', disableDamage);
	return setDisableVehicleExplosionsDamage_result;
}