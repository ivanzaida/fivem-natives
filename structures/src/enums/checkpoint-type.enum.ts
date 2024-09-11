export enum ECheckpointType {
	CheckpointRaceGroundChevron_1Base, // ground races - positioned at base of cylinder
	CheckpointRaceGroundChevron_2Base,
	CheckpointRaceGroundChevron_3Base,
	CheckpointRaceGroundLapBase,
	CheckpointRaceGroundFlagBase,
	CheckpointRaceGroundPitLaneBase,
	CheckpointRaceGroundChevron_1, // ground races - positioned at centre of chevron/flag etc
	CheckpointRaceGroundChevron_2,
	CheckpointRaceGroundChevron_3,
	CheckpointRaceGroundLap,
	CheckpointRaceGroundFlag,
	CheckpointRaceGroundPitLane,
	CheckpointRaceAirChevron_1, // air races
	CheckpointRaceAirChevron_2,
	CheckpointRaceAirChevron_3,
	CheckpointRaceAirLap,
	CheckpointRaceAirFlag,
	CheckpointRaceWaterChevron_1, // water races
	CheckpointRaceWaterChevron_2,
	CheckpointRaceWaterChevron_3,
	CheckpointRaceWaterLap,
	CheckpointRaceWaterFlag,
	CheckpointRaceTriRunChevron_1, // triathlon running races
	CheckpointRaceTriRunChevron_2,
	CheckpointRaceTriRunChevron_3,
	CheckpointRaceTriRunLap,
	CheckpointRaceTriRunFlag,
	CheckpointRaceTriSwimChevron_1, // triathlon swimming races
	CheckpointRaceTriSwimChevron_2,
	CheckpointRaceTriSwimChevron_3,
	CheckpointRaceTriSwimLap,
	CheckpointRaceTriSwimFlag,
	CheckpointRaceTriCycleChevron_1, // triathlon cycling races
	CheckpointRaceTriCycleChevron_2,
	CheckpointRaceTriCycleChevron_3,
	CheckpointRaceTriCycleLap,
	CheckpointRaceTriCycleFlag,
	CheckpointPlaneFlat, // plane school
	CheckpointPlaneSideL,
	CheckpointPlaneSideR,
	CheckpointPlaneInverted,
	CheckpointHeliLanding, // heli
	CheckpointParachuteRing, // parachute
	CheckpointParachuteLanding,
	CheckpointGangLocateLost, // gang locators
	CheckpointGangLocateVagos,
	CheckpointGangLocateCops,
	CheckpointRaceLocateGround, // gang locators
	CheckpointRaceLocateAir,
	CheckpointRaceLocateWater,
	CheckpointMpLocate_1, // gang locators
	CheckpointMpLocate_2,
	CheckpointMpLocate_3,
	CheckpointMpCreatorTrigger,
	CheckpointMoney, // freemode
	CheckpointBeast, // misc
	CheckpointTransform, // transforms
	CheckpointTransformPlane,
	CheckpointTransformHelicopter,
	CheckpointTransformBoat,
	CheckpointTransformCar,
	CheckpointTransformBike,
	CheckpointTransformPushBike,
	CheckpointTransformTruck,
	CheckpointTransformParachute,
	CheckpointTransformThruster,
	CheckpointWarp, // warps
}