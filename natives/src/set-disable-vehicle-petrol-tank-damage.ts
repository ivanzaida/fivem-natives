import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_VEHICLE_PETROL_TANK_DAMAGE
 *
 * 0x8DB4917AFAD347BC

 * 
 * Sets whether a petrol tank can take damage
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setDisableVehiclePetrolTankDamage(vehicle: VehicleIndex, val: boolean): void {
	const setDisableVehiclePetrolTankDamage_result = Citizen.invokeNative<void>('0x8DB4917AFAD347BC', vehicle, val);
	return setDisableVehiclePetrolTankDamage_result;
}