import { VehicleGeneratorIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_SCRIPT_VEHICLE_GENERATOR_EXIST
 *
 * 0x9173EE00A72DCA49

 * 
 * ------------------------------------------------------------------
 * @param {VehicleGeneratorIndex} carGenerator
 * @returns {boolean}  
 */
export function doesScriptVehicleGeneratorExist(carGenerator: VehicleGeneratorIndex): boolean {
	const doesScriptVehicleGeneratorExist_result = Citizen.invokeNative<boolean>('0x9173EE00A72DCA49', carGenerator);
	return doesScriptVehicleGeneratorExist_result;
}