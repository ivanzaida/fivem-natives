import { VehicleGeneratorIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DELETE_SCRIPT_VEHICLE_GENERATOR
 *
 * 0x0D1F59EC6D37A7EE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleGeneratorIndex} carGenerator
 */
export function deleteScriptVehicleGenerator(carGenerator: VehicleGeneratorIndex): void {
	const deleteScriptVehicleGenerator_result = Citizen.invokeNative<void>('0x0D1F59EC6D37A7EE', carGenerator);
	return deleteScriptVehicleGenerator_result;
}