import { VehicleIndex, EScWindowList } from '@ivanzaida/structures'

/**
 * VEHICLE:FIX_VEHICLE_WINDOW
 *
 * 0x3BFC7329EC766FED

 * windowIndex:
 * 0 = Front Left Window
 * 1 = Front Right Window
 * 2 = Rear Left Window
 * 3 = Rear Right Window
 * 4 = Front Windscreen
 * 5 = Rear Windscreen
 * 6 = Mid Left
 * 7 = Mid Right
 * 8 = Invalid
 * Additional information: FIX_VEHICLE_WINDOW (0x140D0BB88) references an array of bone vehicle indices (0x141D4B3E0) { 2Ah, 2Bh, 2Ch, 2Dh, 2Eh, 2Fh, 28h, 29h } that correspond to: window_lf, window_rf, window_lr, window_rr, window_lm, window_rm, windscreen, windscreen_r. This array is used by most vehwindow natives.
 * Also, this function is coded to not work on vehicles of type: CBike, Bmx, CBoat, CTrain, and CSubmarine.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWindowList} windowNumber
 */
export function fixVehicleWindow(vehicle: VehicleIndex, windowNumber: EScWindowList | number): void {
	const fixVehicleWindow_result = Citizen.invokeNative<void>('0x3BFC7329EC766FED', vehicle, windowNumber);
	return fixVehicleWindow_result;
}