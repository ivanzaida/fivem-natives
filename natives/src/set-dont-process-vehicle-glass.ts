import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DONT_PROCESS_VEHICLE_GLASS
 *
 * 0xE0ACB5BC9D603F02

 * 
 * R used it to "remove" vehicle windows when "nightshark" had some mod, which adding some kind of armored windows. When enabled, you can't break vehicles glass. All your bullets wiil shoot through glass. You also will not able to break the glass with any other way (hitting and etc)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setDontProcessVehicleGlass(vehicle: VehicleIndex, val: boolean): void {
	const setDontProcessVehicleGlass_result = Citizen.invokeNative<void>('0xE0ACB5BC9D603F02', vehicle, val);
	return setDontProcessVehicleGlass_result;
}