import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MOD
 *
 * 0x8450270DC5896D39

 * In b944, there are 50 (0 - 49) mod types.
 * Sets the vehicle mod.
 * The vehicle must have a mod kit first.
 * Any out of range ModIndex is stock.
 * #Mod Type
 * Spoilers - 0
 * Front Bumper - 1
 * Rear Bumper - 2
 * Side Skirt - 3
 * Exhaust - 4
 * Frame - 5
 * Grille - 6
 * Hood - 7
 * Fender - 8
 * Right Fender - 9
 * Roof - 10
 * Engine - 11
 * Brakes - 12
 * Transmission - 13
 * Horns - 14 (modIndex from 0 to 51)
 * Suspension - 15
 * Armor - 16
 * Front Wheels - 23
 * Back Wheels - 24 //only for motocycles
 * Plate holders - 25
 * Trim Design - 27
 * Ornaments - 28
 * Dial Design - 30
 * Steering Wheel - 33
 * Shifter Leavers - 34
 * Plaques - 35
 * Hydraulics - 38
 * Livery - 48
 * ENUMS: https://pastebin.com/QzEAn02v
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {number} mod
 * @param {boolean} variation
 */
export function setVehicleMod(vehicle: VehicleIndex, modSlot: EModType | number, mod: number, variation: boolean = false): void {
	const setVehicleMod_result = Citizen.invokeNative<void>('0x8450270DC5896D39', vehicle, modSlot, mod, variation);
	return setVehicleMod_result;
}