import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_INCREASE_WHEEL_CRUSH_DAMAGE
 *
 * 0xEB7247ECF9313934

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} increaseDamage
 */
export function setIncreaseWheelCrushDamage(vehicle: VehicleIndex, increaseDamage: boolean): void {
	const setIncreaseWheelCrushDamage_result = Citizen.invokeNative<void>('0xEB7247ECF9313934', vehicle, increaseDamage);
	return setIncreaseWheelCrushDamage_result;
}