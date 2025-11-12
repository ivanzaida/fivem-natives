import { VehicleGeneratorIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SCRIPT_VEHICLE_GENERATOR
 *
 * 0x36B6F306570BAA3F

 * 
 * To switch the given car generator off, pass in 0 as the NumberToGenerate. To switch the car generator on, pass in a number greater than 100.
 * If a number less than or equal to 100 is passed in then the generator will generate that number of cars and then switch itself off.
 * 
 * Only called once in the decompiled scripts. Presumably activates the specified generator.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleGeneratorIndex} carGenerator
 * @param {number} numberOfCarsToGenerate
 */
export function setScriptVehicleGenerator(carGenerator: VehicleGeneratorIndex, numberOfCarsToGenerate: number): void {
	const setScriptVehicleGenerator_result = Citizen.invokeNative<void>('0x36B6F306570BAA3F', carGenerator, numberOfCarsToGenerate);
	return setScriptVehicleGenerator_result;
}