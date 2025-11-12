import { PedIndex, VehicleIndex, EVehicleMission } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLANE_MISSION
 *
 * 0x8737E7B1F3150A9F

 * 
 * EXAMPLE USAGE:
 * 
 * Fly around target (Precautiously, keeps high altitude):
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, 200f);
 * 
 * Fly around target (Dangerously, keeps VERY low altitude):
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -500f);
 * 
 * Fly directly into target:
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -5000f);
 * 
 * EXPANDED INFORMATION FOR ADVANCED USAGE (custom pilot)
 * 
 * 'physicsSpeed': (THIS IS NOT YOUR ORDINARY SPEED PARAMETER: READ!!)
 * Think of this -first- as a radius value, not a true speed value.  The ACTUAL effective speed of the plane will be that of the maximum speed permissible to successfully fly in a -circle- with a radius of 'physicsSpeed'.  This also means that the plane must complete a circle before it can begin its "bombing run", its straight line pass towards the target.  p9 appears to influence the angle at which a "bombing run" begins, although I can't confirm yet.
 * 
 * VERY IMPORTANT: A "bombing run" will only occur if a plane can successfully determine a possible navigable route (the slower the value of 'physicsSpeed', the more precise the pilot can be due to less influence of physics on flightpath).  Otherwise, the pilot will continue to patrol around Destination (be it a dynamic Entity position vector or a fixed world coordinate vector.)
 * 
 * 0 = Plane's physics are almost entirely frozen, plane appears to "orbit" around precise destination point
 * 1-299 = Blend of "frozen, small radius" vs. normal vs. "accelerated, hyperfast, large radius"
 * 300+ =  Vehicle behaves entirely like a normal gameplay plane.
 * 
 * 'patrolBlend' (The lower the value, the more the Destination is treated as a "fly AT" rather than a "fly AROUND point".)
 * 
 * Scenario: Destination is an Entity on ground level, wide open field
 * -5000 = Pilot kamikazes directly into Entity
 * -1000 = Pilot flies extremely low -around- Entity, very prone to crashing
 * -200 = Pilot flies lower than average around Entity.
 * 0 = Pilot flies around Entity, normal altitude
 * 200 = Pilot flies an extra eighty units or so higher than 0 while flying around Destination (this doesn't seem to correlate directly into distance units.)
 * 
 * -- Valid mission types found in the exe: --
 * 
 * 0 = None
 * 1 = Unk
 * 2 = CTaskVehicleRam
 * 3 = CTaskVehicleBlock
 * 4 = CTaskVehicleGoToPlane
 * 5 = CTaskVehicleStop
 * 6 = CTaskVehicleAttack
 * 7 = CTaskVehicleFollow
 * 8 = CTaskVehicleFleeAirborne
 * 9= CTaskVehicleCircle
 * 10 = CTaskVehicleEscort
 * 15 = CTaskVehicleFollowRecording
 * 16 = CTaskVehiclePoliceBehaviour
 * 17 = CTaskVehicleCrash
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} plane
 * @param {VehicleIndex} targetVehicle
 * @param {PedIndex} targetPed
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {EVehicleMission} mission
 * @param {number} cruiseSpeed
 * @param {number} targetReachedDist
 * @param {number} planeOrientation
 * @param {number} flightHeight
 * @param {number} minHeightAboveTerrain
 * @param {boolean} precise
 */
export function taskPlaneMission(ped: PedIndex, plane: VehicleIndex, targetVehicle: VehicleIndex, targetPed: PedIndex, coorsX: number, coorsY: number, coorsZ: number, mission: EVehicleMission | number, cruiseSpeed: number, targetReachedDist: number, planeOrientation: number, flightHeight: number, minHeightAboveTerrain: number, precise: boolean = true): void {
	const taskPlaneMission_result = Citizen.invokeNative<void>('0x8737E7B1F3150A9F', ped, plane, targetVehicle, targetPed, coorsX, coorsY, coorsZ, mission, cruiseSpeed, targetReachedDist, planeOrientation, flightHeight, minHeightAboveTerrain, precise);
	return taskPlaneMission_result;
}