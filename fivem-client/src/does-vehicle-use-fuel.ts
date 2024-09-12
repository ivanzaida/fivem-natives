import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:DOES_VEHICLE_USE_FUEL
 *
 * 0xEF30A696

 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @returns {boolean}  True if the vehicle uses fuel to move. False otherwise.
 */
export function doesVehicleUseFuel(vehicle: VehicleIndex): boolean {
	const doesVehicleUseFuel_result = Citizen.invokeNative<boolean>('0xEF30A696', vehicle);
	return doesVehicleUseFuel_result;
}