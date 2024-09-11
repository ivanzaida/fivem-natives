export enum EEseekEntityOffsetFlags {
	EseekDefault,
	EseekOffsetOrientatesWithEntity, // Specifies that the XY offset orientates with the entity. Only valid with TASK_GOTO_ENTITY_OFFSET_XY
	EseekKeepToPavements, // The ped will attempt to keep to pavements whilst seeking the targe entity
}