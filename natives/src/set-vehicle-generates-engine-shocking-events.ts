import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_GENERATES_ENGINE_SHOCKING_EVENTS
 *
 * 0x6A59D337CB7DD7E0

 * 
 * Allows creation of CEventShockingPlaneFlyby, CEventShockingHelicopterOverhead, and other(?) Shocking events
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowedToGenerateEvents
 */
export function setVehicleGeneratesEngineShockingEvents(vehicle: VehicleIndex, allowedToGenerateEvents: boolean): void {
	const setVehicleGeneratesEngineShockingEvents_result = Citizen.invokeNative<void>('0x6A59D337CB7DD7E0', vehicle, allowedToGenerateEvents);
	return setVehicleGeneratesEngineShockingEvents_result;
}