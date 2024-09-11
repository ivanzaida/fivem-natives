export enum ECombatAttribute {
	CaInvalid = -1,
	CaUseCover, // AI will only use cover if this is set
	CaUseVehicle, // AI will only use vehicles if this is set
	CaDoDrivebys, // AI will only driveby from a vehicle if this is set
	CaLeaveVehicles, // Will be forced to stay in a ny vehicel if this isn't set
	CaCanUseDynamicStrafeDecisions, // This ped can make decisions on whether to strafe or not based on distance to destination, recent bullet events, etc.
	CaAlwaysFight, // Ped will always fight upon getting threat response task
	CaFleeWhilstInVehicle, // If in combat and in a vehicle, the ped will flee rather than attacking
	CaJustFollowVehicle, // If in combat and chasing in a vehicle, the ped will keep a distance behind rather than ramming
	CaPlayReactionAnims, // Deprecated
	CaWillScanForDeadPeds, // Peds will scan for and react to dead peds found
	CaIsAGuard, // Deprecated
	CaJustSeekCover, // The ped will seek cover only
	CaBlindFireInCover, // Ped will only blind fire when in cover
	CaAggressive, // Ped may advance
	CaCanInvestigate, // Ped can investigate events such as distant gunfire, footsteps, explosions etc
	CaCanUseRadio, // Ped can use a radio to call for backup (happens after a reaction)
	CaCanCaptureEnemyPeds, // Deprecated
	CaAlwaysFlee, // Ped will always flee upon getting threat response task
	CaCanTauntInVehicle = 20, // Ped can do unarmed taunts in vehicle
	CaCanChaseTargetOnFoot, // Ped will be able to chase their targets if both are on foot and the target is running away
	CaWillDragInjuredPedsToSafety, // Ped can drag injured peds to safety
	CaRequiresLosToShoot, // Ped will require LOS to the target it is aiming at before shooting
	CaUseProximityFiringRate, // Ped is allowed to use proximity based fire rate (increasing fire rate at closer distances)
	CaDisableSecondaryTarget, // Normally peds can switch briefly to a secondary target in combat, setting this will prevent that
	CaDisableEntryReactions, // This will disable the flinching combat entry reactions for peds, instead only playing the turn and aim anims
	CaPerfectAccuracy, // Force ped to be 100% accurate in all situations (added by Jay Reinebold)
	CaCanUseFrustratedAdvance, // If we don't have cover and can't see our target it's possible we will advance, even if the target is in cover
	CaMoveToLocationBeforeCoverSearch, // This will have the ped move to defensive areas and within attack windows before performing the cover search
	CaCanShootWithoutLos, // Allow shooting of our weapon even if we don't have LOS (this isn't X-ray vision as it only affects weapon firing)
	CaMaintainMinDistanceToTarget, // Ped will try to maintain a min distance to the target, even if using defensive areas (currently only for cover finding + usage)
	CaCanUsePeekingVariations = 34, // Allows ped to use steamed variations of peeking anims
	CaDisablePinnedDown, // Disables pinned down behaviors
	CaDisablePinDownOthers, // Disables pinning down others
	CaOpenCombatWhenDefensiveAreaIsReached, // When defensive area is reached the area is cleared and the ped is set to use defensive combat movement
	CaDisableBulletReactions, // Disables bullet reactions
	CaCanBust, // Allows ped to bust the player
	CaIgnoredByOtherPedsWhenWanted, // This ped is ignored by other peds when wanted
	CaCanCommandeerVehicles, // Ped is allowed to "jack" vehicles when needing to chase a target in combat
	CaCanFlank, // Ped is allowed to flank
	CaSwitchToAdvanceIfCantFindCover, // Ped will switch to advance if they can't find cover
	CaSwitchToDefensiveIfInCover, // Ped will switch to defensive if they are in cover
	CaClearPrimaryDefensiveAreaWhenReached, // Ped will clear their primary defensive area when it is reached
	CaCanFightArmedPedsWhenNotArmed, // Ped is allowed to fight armed peds when not armed
	CaEnableTacticalPointsWhenDefensive, // Ped is not allowed to use tactical points if set to use defensive movement (will only use cover)
	CaDisableCoverArcAdjustments, // Ped cannot adjust cover arcs when testing cover safety (atm done on corner cover points when  ped usingdefensive area + no LOS)
	CaUseEnemyAccuracyScaling, // Ped may use reduced accuracy with large number of enemies attacking the same local player target
	CaCanCharge, // Ped is allowed to charge the enemy position
	CaRemoveAreaSetWillAdvanceWhenDefensiveAreaReached, // When defensive area is reached the area is cleared and the ped is set to use will advance movement
	CaUseVehicleAttack, // Use the vehicle attack mission during combat (only works on driver)
	CaUseVehicleAttackIfVehicleHasMountedGuns, // Use the vehicle attack mission during combat if the vehicle has mounted guns (only works on driver)
	CaAlwaysEquipBestWeapon, // Always equip best weapon in combat
	CaCanSeeUnderwaterPeds, // Ignores in water at depth visibility check
	CaDisableAimAtAiTargetsInHelis, // Will prevent this ped from aiming at any AI targets that are in helicopters
	CaDisableSeekDueToLineOfSight, // Disables peds seeking due to no clear line of sight
	CaDisableFleeFromCombat, // To be used when releasing missions peds if we don't want them fleeing from combat (mission peds already prevent flee)
	CaDisableTargetChangesDuringVehiclePursuit, // Disables target changes during vehicle pursuit
	CaCanThrowSmokeGrenade, // Ped may throw a smoke grenade at player loitering in combat
	CaClearAreaSetDefensiveIfDefensiveCannotBeReached = 62, // Will clear a set defensive area if that area cannot be reached
	CaDisableBlockFromPursueDuringVehicleChase = 64, // Disable block from pursue during vehicle chases
	CaDisableSpinOutDuringVehicleChase, // Disable spin out during vehicle chases
	CaDisableCruiseInFrontDuringBlockDuringVehicleChase, // Disable cruise in front during block during vehicle chases
	CaCanIgnoreBlockedLosWeighting, // Makes it more likely that the ped will continue targeting a target with blocked los for a few seconds
	CaDisableReactToBuddyShot, // Disables the react to buddy shot behaviour.
	CaPreferNavmeshDuringVehicleChase, // Prefer pathing using navmesh over road nodes
	CaAllowedToAvoidOffroadDuringVehicleChase, // Ignore road edges when avoiding
	CaPermitChargeBeyondDefensiveArea, // Permits ped to charge a target outside the assigned defensive area.
	CaUseRocketsAgainstVehiclesOnly, // This ped will switch to an RPG if target is in a vehicle, otherwise will use alternate weapon.
	CaDisableTacticalPointsWithoutClearLos, // Disables peds moving to a tactical point without clear los
	CaDisablePullAlongsideDuringVehicleChase, // Disables pull alongside during vehicle chase
	CaDisableAllRandomsFlee = 78, // If set on a ped, they will not flee when all random peds flee is set to TRUE (they are still able to flee due to other reasons)
	CaWillGenerateDeadPedSeenScriptEvents, // This ped will send out a script DeadPedSeenEvent when they see a dead ped
	CaUseMaxSenseRangeWhenReceivingEvents, // This will use the receiving peds sense range rather than the range supplied to the communicate event
	CaRestrictInVehicleAimingToCurrentSide, // When aiming from a vehicle the ped will only aim at targets on his side of the vehicle
	CaUseDefaultBlockedLosPositionAndDirection, // LOS to the target is blocked we return to our default position and direction until we have LOS (no aiming)
	CaRequiresLosToAim, // LOS to the target is blocked we return to our default position and direction until we have LOS (no aiming)
	CaCanCruiseAndBlockInVehicle, // Allow vehicles spawned infront of target facing away to enter cruise and wait to block approaching target
	CaPreferAirCombatWhenInAircraft, // Peds flying aircraft will prefer to target other aircraft over entities on the ground
	CaAllowDogFighting, // Allow peds flying aircraft to use dog fighting behaviours
	CaPreferNonAircraftTargets, // This will make the weight of targets who aircraft vehicles be reduced greatly compared to targets on foot or in ground based vehicles
	CaPreferKnownTargetsWhenCombatClosestTarget, // When peds are tasked to go to combat, they keep searching for a known target for a while before forcing an unknown one
	CaForceCheckAttackAngleForMountedGuns, // Only allow mounted weapons to fire if within the correct attack angle (default 25-degree cone). On a flag in order to keep exiting behaviour and only fix in specific cases.
	CaBlockFireForVehiclePassengerMountedGuns, // Blocks the firing state for passenger-controlled mounted weapons. Existing flags CA_USE_VEHICLE_ATTACK and CA_USE_VEHICLE_ATTACK_IF_VEHICLE_HAS_MOUNTED_GUNS only work for drivers.
}