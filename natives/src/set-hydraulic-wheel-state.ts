import { VehicleIndex, EScWheelList, EWheelHydraulicScriptState } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HYDRAULIC_WHEEL_STATE
 *
 * 0x640BC0200CE90880

 * 
 * Sets vehicle wheel hydraulic states transition. Known states:
 * 0 - reset
 * 1 - raise wheel (uses value arg, works just like _SET_VEHICLE_HYDRAULIC_WHEEL_VALUE)
 * 2 - jump using wheel
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWheelList} wheelNumber
 * @param {EWheelHydraulicScriptState} state
 * @param {number} raiseAmount
 * @param {number} raiseSpeed
 */
export function setHydraulicWheelState(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, state: EWheelHydraulicScriptState | number, raiseAmount: number, raiseSpeed: number): void {
	const setHydraulicWheelState_result = Citizen.invokeNative<void>('0x640BC0200CE90880', vehicle, wheelNumber, state, raiseAmount, raiseSpeed);
	return setHydraulicWheelState_result;
}