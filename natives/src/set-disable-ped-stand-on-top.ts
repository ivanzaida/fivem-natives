import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_PED_STAND_ON_TOP
 *
 * 0x8235F1BEAD557629

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableStandOn
 */
export function setDisablePedStandOnTop(vehicle: VehicleIndex, disableStandOn: boolean): void {
	const setDisablePedStandOnTop_result = Citizen.invokeNative<void>('0x8235F1BEAD557629', vehicle, disableStandOn);
	return setDisablePedStandOnTop_result;
}