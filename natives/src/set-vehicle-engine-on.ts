import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ENGINE_ON
 *
 * 0xC229299217554C78

 * 
 * Starts or stops the engine on the specified vehicle.
 * 
 * vehicle: The vehicle to start or stop the engine on.
 * value: true to turn the vehicle on; false to turn it off.
 * instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
 * disableAutoStart: If true, the system will prevent the engine from starting when the player got into it.
 * 
 * from what I've tested when I do this to a helicopter the propellers turn off after the engine has started. so is there any way to keep the heli propellers on?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} engineOnFlag
 * @param {boolean} noDelay
 * @param {boolean} onlyStartWithPlayerInput
 */
export function setVehicleEngineOn(vehicle: VehicleIndex, engineOnFlag: boolean, noDelay: boolean, onlyStartWithPlayerInput: boolean = false): void {
	const setVehicleEngineOn_result = Citizen.invokeNative<void>('0xC229299217554C78', vehicle, engineOnFlag, noDelay, onlyStartWithPlayerInput);
	return setVehicleEngineOn_result;
}