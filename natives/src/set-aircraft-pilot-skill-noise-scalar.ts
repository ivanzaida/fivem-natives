import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_AIRCRAFT_PILOT_SKILL_NOISE_SCALAR
 *
 * 0x97FB44DEA703EB10

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} scalar
 */
export function setAircraftPilotSkillNoiseScalar(vehicle: VehicleIndex, scalar: number): void {
	const setAircraftPilotSkillNoiseScalar_result = Citizen.invokeNative<void>('0x97FB44DEA703EB10', vehicle, scalar);
	return setAircraftPilotSkillNoiseScalar_result;
}