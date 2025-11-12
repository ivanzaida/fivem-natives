import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_COLOUR_COMBINATION
 *
 * 0x0507EE8EDD1D75E9

 * 
 * Car models have a number of colour combinations preset for them in carvariations.pso.meta
 * Use GET_NUM_CAR_COLOURS first to find out how many combinations there are.
 * 
 * Returns the index of the color combination found in the vehicle's carvariations.meta entry.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleColourCombination(vehicle: VehicleIndex): number {
	const getVehicleColourCombination_result = Citizen.invokeNative<number>('0x0507EE8EDD1D75E9', vehicle);
	return getVehicleColourCombination_result;
}