import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_COUNTERMEASURE_AMMO
 *
 * 0xEC0CBF0E037FEEB0

 * 
 * Sets the current countermeasure ammo count for a script vehicle.
 * Unlike restricted vehicle ammo (which is code fired), this is script-fired and manually decremented, and only stored in vehicle code for network sync purposes.
 * 
 * Similar to SET_VEHICLE_BOMB_AMMO, this sets the amount of countermeasures that are present on this vehicle.
 * Use GET_VEHICLE_BOMB_AMMO to get the current amount.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} ammoCount
 */
export function setVehicleCountermeasureAmmo(vehicle: VehicleIndex, ammoCount: number): void {
	const setVehicleCountermeasureAmmo_result = Citizen.invokeNative<void>('0xEC0CBF0E037FEEB0', vehicle, ammoCount);
	return setVehicleCountermeasureAmmo_result;
}