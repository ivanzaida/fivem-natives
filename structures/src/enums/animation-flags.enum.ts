export enum EAnimationFlags {
	AfDefault,
	AfLooping, // Repeat the animation
	AfHoldLastFrame, // Hold on the last frame of the animation
	AfRepositionWhenFinished = 4, // When the animation finishes pop the peds physical reprsentation position to match the visual representations position Note that the animator must not unwind the animation and must have an independent mover node
	AfNotInterruptable = 8, // Can the task not be interupted by extenal events
	AfUpperbody = 16, // Only plays the upper body part of the animation. Dampens any motion caused by the lower body animation.Note that the animation should include the root node
	AfSecondary = 32, // The task will run in the secondary task slot. This means it can be used aswell as a movement task (for instance)
	AfReorientWhenFinished = 64, // When the animation finishes pop the peds physical reprsentation direction to match the visual representations direction. Note that the animator must not unwind the animation and must have an independent mover node
	AfAbortOnPedMovement = 128, // Ends the animation early if the ped attemps to move e.g. if the player tries to move using the controller. Can also be used to blend out automatically when an ai ped starts moving by combining it with the AF_SECONDARY flag.
	AfAdditive = 256, // Play back the animation additively. Note, this will only produce sensible results on specifically authored additive animations!
	AfTurnOffCollision = 512, // Do not react to collision detection whilst this anim is playing
	AfOverridePhysics = 1024, // Do not apply any physics forces whilst the anim is playing. Automatically turns off collision, extracts any initial offset provided in the clip and uses per frame mover extraction.
	AfIgnoreGravity = 2048, // Do not apply gravity while the anim is playing
	AfExtractInitialOffset = 4096, // Extract an initial offset from the playback position authored by the animator
	AfExitAfterInterrupted = 8192, // Use this flag when playing back anims on different peds which have been authored to sync with each other. Exit the animation task if it is interrupted by another task (ie Natural Motion).  Without this flag bing set looped animations will restart ofter the NM task
	AfTagSyncIn = 16384, // Tag synchronizer flags - sync the anim against ped movement (walking / running / etc). Sync the anim whilst blending in (use for seamless transitions from walk / run into a full body anim)
	AfTagSyncOut = 32768, // Sync the anim whilst blending out (use for seamless transitions from a full body anim into walking / running behaviour)
	AfTagSyncContinuous = 65536, // Sync all the time (Only usefull to synchronize a partial anim e.g. an upper body)
	AfForceStart = 131072, // Force the anim task to start even if the ped is falling / ragdolling / etc. Can fix issues with peds not playing their anims immediately after a warp / etc
	AfUseKinematicPhysics = 262144, // Use the kinematic physics mode on the entity for the duration of the anim (it should push other entities out of the way, and not be pushed around by players / etc
	AfUseMoverExtraction = 524288, // Updates the peds capsule position every frame based on the animation. Use in conjunction with AF_USE_KINEMATIC_PHYSICS to create characters that cannot be pushed off course by other entities / geometry / etc whilst playing the anim.
	AfHideWeapon = 1048576, // Indicates that the ped's weapon should be hidden while this animation is playing.
	AfEndsInDeadPose = 2097152, // When the anim ends, kill the ped and use the currently playing anim as the dead pose
	AfActivateRagdollOnCollision = 4194304, // If the peds ragdoll bounds make contact with something physical (that isn't flat ground) activate the ragdoll and fall over.
	AfDontExitOnDeath = 8388608, // Currently used only on secondary anim tasks. Secondary anim tasks will end automatically when the ped dies. Setting this flag stops that from happening."
	AfAbortOnWeaponDamage = 16777216, // Allow aborting from damage events (including non-ragdoll damage events) even when blocking other ai events using AF_NOT_INTERRUPTABLE.
	AfDisableForcedPhysicsUpdate = 33554432, // Prevent adjusting the capsule on the enter state (useful if script is doing a sequence of scripted anims and they are known to more or less stand still)
	AfProcessAttachmentsOnStart = 67108864, // Force the attachments to be processed at the start of the clip
	AfExpandPedCapsuleFromSkeleton = 134217728, // Expands the capsule to the extents of the skeleton
	AfUseAlternativeFpAnim = 268435456, // Plays an alternative first person version of the clip on the player when in first person mode (the first person clip must be in the same dictionary, and be named the same as the anim you're playing, but with _FP appended on the end)
	AfBlendoutWrtLastFrame = 536870912, // Start blending out the anim early, so that the blend out duration completes at the end of the animation.
	AfUseFullBlending = 1073741824, // Use full blending for this anim and override the heading/position adjustment in CTaskScriptedAnimation
}