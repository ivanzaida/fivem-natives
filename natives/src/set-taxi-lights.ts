import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TAXI_LIGHTS
 *
 * 0x0B29D0B41AC20799

 * 
 * This is not tested - it's just an assumption.
 * - Nac
 * 
 * Doesn't seem to work.  I'll try with an int instead. --JT
 * 
 * Read the scripts, im dumpass.
 * 
 *                             if (!VEHICLE::IS_TAXI_LIGHT_ON(l_115)) {
 *                                 VEHICLE::SET_TAXI_LIGHTS(l_115, 1);
 *                             }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} taxiLightsFlag
 */
export function setTaxiLights(vehicle: VehicleIndex, taxiLightsFlag: boolean): void {
	const setTaxiLights_result = Citizen.invokeNative<void>('0x0B29D0B41AC20799', vehicle, taxiLightsFlag);
	return setTaxiLights_result;
}