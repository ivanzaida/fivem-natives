import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_COLOUR_COMBINATION
 *
 * 0xA557AEAD

 * 
 * Car models have a number of colour combinations preset for them in carvariations.pso.meta
 * Use GET_NUM_CAR_COLOURS first to find out how many combinations there are.
 * 
 * Sets the selected vehicle's colors to the specified index of the color combination found in the vehicle's carvariations.meta entry.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to modify.
 * @param {number} colorCombination One of the default color values of the vehicle.
 */
export function setVehicleColourCombination(vehicle: VehicleIndex, colorCombination: number): void {
	const setVehicleColourCombination_result = Citizen.invokeNative<void>('0xA557AEAD', vehicle, colorCombination);
	return setVehicleColourCombination_result;
}