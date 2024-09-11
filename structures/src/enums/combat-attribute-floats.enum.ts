export enum ECombatAttributeFloats {
	CcfBlindFireChance, // Chance to blind fire from cover, range is 0.0-1.0 (default is 0.05 for civilians, law doesn't blind fire)
	CcfBurstDurationInCover, // How long each burst from cover should last (default is 2.0)
	CcfMaxShootingDistance, // The maximum distance the ped will try to shoot from (will override weapon range if set to anything > 0.0, default is -1.0)
	CcfTimeBetweenBurstsInCover, // How long to wait, in cover, between firing bursts (< 0.0 will disable firing, unless cover fire is requested, default is 1.25)
	CcfTimeBetweenPeeks, // How long to wait before attempting to peek again (default is 10.0)
	CcfStrafeWhenMovingChance, // A chance to strafe to cover, range is 0.0-1.0 (0.0 will force them to run, 1.0 will force strafe and shoot, default is 1.0)
	CcfWeaponAccuracy, // default is 0.4
	CcfFightProficiency, // How well an opponent can melee fight, range is 0.0-1.0 (default is 0.5)
	CcfWalkWhenStrafingChance, // The possibility of a ped walking while strafing rather than jog/run, range is 0.0-1.0 (default is 0.0)
	CcfHeliSpeedModifier, // The speed modifier when driving a heli in combat
	CcfHeliSensesRange, // The range of the ped's senses (sight, identification, hearing) when in a heli
	CcfAttackWindowDistanceForCover, // The distance we'll use for cover based behaviour in attack windows Default is -1.0 (disabled), range is -1.0 to 150.0
	CcfTimeToInvalidateInjuredTarget, // How long to stop combat an injured target if there is no other valid target, if target is player in singleplayer
	CcfMinDistanceToTarget, // this will happen indefinitely unless explicitly disabled by setting to 0.0, default = 10.0 range = 0-50. Min distance the ped will use if CA_MAINTAIN_MIN_DISTANCE_TO_TARGET is set, default 5.0 (currently only for cover search + usage)
	CcfBulletImpactDetectionRange, // The range at which the ped will detect the bullet impact event
	CcfAimTurnThreshold, // The threshold at which the ped will perform an aim turn
	CcfOptimalCoverDistance,
	CcfAutomobileSpeedModifier, // The speed modifier when driving an automobile in combat
	CcfSpeedToFleeInVehicle,
	CcfTriggerChargeTimeNear, // How long to wait before charging a close target hiding in cover
	CcfTriggerChargeTimeFar, // How long to wait before charging a distant target hiding in cover
	CcfMaxDistanceToHearEvents, // Max distance peds can hear an event from, even if the sound is louder
	CcfMaxDistanceToHearEventsUsingLos, // Max distance peds can hear an event from, even if the sound is louder if the ped is using LOS to hear events (CPED_CONFIG_FLAG_CheckLoSForSoundEvents)
	CcfHomingRocketBreakLockAngle, // Angle between the rocket and target where lock-on will stop, range is 0.0-1.0, (default is 0.2), the bigger the number the easier to break lock
	CcfHomingRocketBreakLockAngleClose, // Angle between the rocket and target where lock-on will stop, when rocket is within CCF_HOMING_ROCKET_BREAK_LOCK_CLOSE_DISTANCE, range is 0.0-1.0, (default is 0.6), the bigger the number the easier to break lock
	CcfHomingRocketBreakLockCloseDistance, // Distance at which we check CCF_HOMING_ROCKET_BREAK_LOCK_ANGLE_CLOSE rather than CCF_HOMING_ROCKET_BREAK_LOCK_ANGLE
	CcfHomingRocketTurnRateModifier, // Alters homing characteristics defined for the weapon (1.0 is default, <1.0 slow turn rates, >1.0 speed them up
	CcfTimeBetweenAggressiveMovesDuringVehicleChase, // Sets the time delay between aggressive moves during vehicle chases. -1.0 means use random values, 0.0 means never
	CcfMaxVehicleTurretFiringRange, // Max firing range for a ped in vehicle turret seat
	CcfWeaponDamageModifier, // Multiplies the weapon damage dealt by the ped, range is 0.0-10.0 (default is 1.0)
	MaxCombatFloats,
}