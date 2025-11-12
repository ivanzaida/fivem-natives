import { PedIndex, VehicleIndex, EVehicleMission, EHelimode } from '@ivanzaida/structures'

/**
 * TASK:TASK_HELI_MISSION
 *
 * 0xDAC27BA46D21818F

 * 
 * Must have targetVehicle, targetPed, OR destination X/Y/Z set
 * Will follow targeted vehicle/ped, or fly to destination
 * Set whichever is not being used to 0
 * 
 * 
 * Mission mode type:
 *  - 4, 7: Forces heli to snap to the heading if set, flies to destination or tracks specified entity (mode 4 only works for coordinates, 7 works for coordinates OR ped/vehicle)
 *  - 6: Attacks the target ped/vehicle with mounted weapons. If radius is set, will maintain that distance from target.
 *  - 8: Makes the heli flee from the ped/vehicle/coordinate
 *  - 9: Circles around target ped/vehicle, snaps to angle if set. Behavior flag (last parameter) of 2048 switches from counter-clockwise to clockwise circling. Does not work with coordinate destination.
 *  - 10, 11: Follows ped/vehicle target and imitates target heading. Only works with ped/vehicle target, not coord target
 *  - 19: Heli lands at specified coordinate, ignores heading (lands facing whatever direction it is facing when the task is started)
 *  - 20: Makes the heli land when near target ped. It won't resume chasing.
 *  - 21: Emulates a helicopter crash
 *  - 23: makes the heli circle erratically around ped
 * 
 * 
 * Heli will fly at maxSpeed (up to actual maximum speed defined by the model's handling config)
 * You can use SET_DRIVE_TASK_CRUISE_SPEED to modulate the speed based on distance to the target without having to re-invoke the task native. Setting to 8.0 when close to the destination results in a much smoother approach.
 * 
 * If minHeight and maxHeight are set, heli will fly between those specified elevations, relative to ground level and any obstructions/buildings below. You can specify -1 for either if you only want to specify one. Usually it is easiest to leave maxHeight at -1, and specify a reasonable minHeight to ensure clearance over any obstacles. Note this MUST be passed as an INT, not a FLOAT.
 * 
 * Radius affects how closely the heli will follow tracked ped/vehicle, and when circling (mission type 9) sets the radius (in meters) that it will circle the target from
 * 
 * Heading is -1.0 for default behavior, which will point the nose of the helicopter towards the destination. Set a heading and the heli will lock to that direction when near its destination/target, but may still turn towards the destination when flying at higher speed from a further distance.
 * 
 * Behavior Flags is a bitwise value that modifies the AI behavior. Not clear what all flags do, but here are some guesses/notes:
 *    1: Forces heading to face E
 *    2: Unknown
 *    4: Tight circles around coordinate destination
 *    8: Unknown
 *   16: Circles around coordinate destination facing towards destination
 *   32: Flys to normally, then lands at coordinate destination and stays on the ground (using mission type 4)
 *   64: Ignores obstacles when flying, will follow at specified minHeight above ground level but will not avoid buildings, vehicles, etc.
 *  128: Unknown
 *  256: Unknown
 *  512: Unknown
 * 1024: Unknown
 * 2048: Reverses direction of circling (mission type 9) to clockwise
 * 4096: Hugs closer to the ground, maintains minHeight from ground generally, but barely clears buildings and dips down more between buildings instead of taking a more efficient/safe route
 * 8192: Unknown
 * 
 * Unk3 is a float value, you may see -1082130432 for this value in decompiled native scripts, this is the equivalent to -1.0f. Seems to affect acceleration/aggressiveness, but not sure exactly how it works. Higher value seems to result in lower acceleration/less aggressive flying. Almost always -1.0 in native scripts, occasionally 20.0 or 50.0. Setting to 400.0 seems to work well for making the pilot not overshoot the destination when using coordinate destination.
 * 
 * Notes updated by PNWParksFan, May 2021
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} heli
 * @param {VehicleIndex} targetVehicle
 * @param {PedIndex} targetPed
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {EVehicleMission} mission
 * @param {number} cruiseSpeed
 * @param {number} targetReachedDist
 * @param {number} heliOrientation
 * @param {number} flightHeight
 * @param {number} minHeightAboveTerrain
 * @param {number} slowDownDistance
 * @param {EHelimode} heliFlags
 */
export function taskHeliMission(ped: PedIndex, heli: VehicleIndex, targetVehicle: VehicleIndex, targetPed: PedIndex, coorsX: number, coorsY: number, coorsZ: number, mission: EVehicleMission | number, cruiseSpeed: number, targetReachedDist: number, heliOrientation: number, flightHeight: number, minHeightAboveTerrain: number, slowDownDistance: number = 1, heliFlags: EHelimode | number = 0): void {
	const taskHeliMission_result = Citizen.invokeNative<void>('0xDAC27BA46D21818F', ped, heli, targetVehicle, targetPed, coorsX, coorsY, coorsZ, mission, cruiseSpeed, targetReachedDist, heliOrientation, flightHeight, minHeightAboveTerrain, slowDownDistance, heliFlags);
	return taskHeliMission_result;
}