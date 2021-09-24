gdjs.inflvlCode = {};
gdjs.inflvlCode.GDPlayerObjects1= [];
gdjs.inflvlCode.GDPlayerObjects2= [];
gdjs.inflvlCode.GDPlayerObjects3= [];
gdjs.inflvlCode.GDPlayerObjects4= [];
gdjs.inflvlCode.GDBulletObjects1= [];
gdjs.inflvlCode.GDBulletObjects2= [];
gdjs.inflvlCode.GDBulletObjects3= [];
gdjs.inflvlCode.GDBulletObjects4= [];
gdjs.inflvlCode.GDParticleObjects1= [];
gdjs.inflvlCode.GDParticleObjects2= [];
gdjs.inflvlCode.GDParticleObjects3= [];
gdjs.inflvlCode.GDParticleObjects4= [];
gdjs.inflvlCode.GDHealthObjects1= [];
gdjs.inflvlCode.GDHealthObjects2= [];
gdjs.inflvlCode.GDHealthObjects3= [];
gdjs.inflvlCode.GDHealthObjects4= [];
gdjs.inflvlCode.GDEnemy1Objects1= [];
gdjs.inflvlCode.GDEnemy1Objects2= [];
gdjs.inflvlCode.GDEnemy1Objects3= [];
gdjs.inflvlCode.GDEnemy1Objects4= [];
gdjs.inflvlCode.GDHealthBarObjects1= [];
gdjs.inflvlCode.GDHealthBarObjects2= [];
gdjs.inflvlCode.GDHealthBarObjects3= [];
gdjs.inflvlCode.GDHealthBarObjects4= [];
gdjs.inflvlCode.GDchunkObjects1= [];
gdjs.inflvlCode.GDchunkObjects2= [];
gdjs.inflvlCode.GDchunkObjects3= [];
gdjs.inflvlCode.GDchunkObjects4= [];
gdjs.inflvlCode.GDEnemy2Objects1= [];
gdjs.inflvlCode.GDEnemy2Objects2= [];
gdjs.inflvlCode.GDEnemy2Objects3= [];
gdjs.inflvlCode.GDEnemy2Objects4= [];
gdjs.inflvlCode.GDbossbattleObjects1= [];
gdjs.inflvlCode.GDbossbattleObjects2= [];
gdjs.inflvlCode.GDbossbattleObjects3= [];
gdjs.inflvlCode.GDbossbattleObjects4= [];
gdjs.inflvlCode.GDBoss1Objects1= [];
gdjs.inflvlCode.GDBoss1Objects2= [];
gdjs.inflvlCode.GDBoss1Objects3= [];
gdjs.inflvlCode.GDBoss1Objects4= [];
gdjs.inflvlCode.GDNewObject2Objects1= [];
gdjs.inflvlCode.GDNewObject2Objects2= [];
gdjs.inflvlCode.GDNewObject2Objects3= [];
gdjs.inflvlCode.GDNewObject2Objects4= [];
gdjs.inflvlCode.GDBossBulletObjects1= [];
gdjs.inflvlCode.GDBossBulletObjects2= [];
gdjs.inflvlCode.GDBossBulletObjects3= [];
gdjs.inflvlCode.GDBossBulletObjects4= [];
gdjs.inflvlCode.GDverticalborderObjects1= [];
gdjs.inflvlCode.GDverticalborderObjects2= [];
gdjs.inflvlCode.GDverticalborderObjects3= [];
gdjs.inflvlCode.GDverticalborderObjects4= [];
gdjs.inflvlCode.GDNewObject4Objects1= [];
gdjs.inflvlCode.GDNewObject4Objects2= [];
gdjs.inflvlCode.GDNewObject4Objects3= [];
gdjs.inflvlCode.GDNewObject4Objects4= [];
gdjs.inflvlCode.GDNewObject3Objects1= [];
gdjs.inflvlCode.GDNewObject3Objects2= [];
gdjs.inflvlCode.GDNewObject3Objects3= [];
gdjs.inflvlCode.GDNewObject3Objects4= [];
gdjs.inflvlCode.GDNewObject5Objects1= [];
gdjs.inflvlCode.GDNewObject5Objects2= [];
gdjs.inflvlCode.GDNewObject5Objects3= [];
gdjs.inflvlCode.GDNewObject5Objects4= [];
gdjs.inflvlCode.GDNewObject6Objects1= [];
gdjs.inflvlCode.GDNewObject6Objects2= [];
gdjs.inflvlCode.GDNewObject6Objects3= [];
gdjs.inflvlCode.GDNewObject6Objects4= [];
gdjs.inflvlCode.GDNewObject7Objects1= [];
gdjs.inflvlCode.GDNewObject7Objects2= [];
gdjs.inflvlCode.GDNewObject7Objects3= [];
gdjs.inflvlCode.GDNewObject7Objects4= [];

gdjs.inflvlCode.conditionTrue_0 = {val:false};
gdjs.inflvlCode.condition0IsTrue_0 = {val:false};
gdjs.inflvlCode.condition1IsTrue_0 = {val:false};
gdjs.inflvlCode.condition2IsTrue_0 = {val:false};
gdjs.inflvlCode.conditionTrue_1 = {val:false};
gdjs.inflvlCode.condition0IsTrue_1 = {val:false};
gdjs.inflvlCode.condition1IsTrue_1 = {val:false};
gdjs.inflvlCode.condition2IsTrue_1 = {val:false};


gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects1});gdjs.inflvlCode.eventsList0 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15020860);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bullet");
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.15, "bullet");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
gdjs.inflvlCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects, (( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")) + 20, (( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointY("")) + 4, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bullet");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_laser1.ogg", false, 50, 1);
}}

}


};gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.inflvlCode.GDNewObject5Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.inflvlCode.GDNewObject5Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.inflvlCode.GDNewObject5Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.inflvlCode.GDNewObject5Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.inflvlCode.GDNewObject6Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.inflvlCode.GDNewObject6Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBossBulletObjects1Objects = Hashtable.newFrom({"BossBullet": gdjs.inflvlCode.GDBossBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBossBulletObjects1Objects = Hashtable.newFrom({"BossBullet": gdjs.inflvlCode.GDBossBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDverticalborderObjects1Objects = Hashtable.newFrom({"verticalborder": gdjs.inflvlCode.GDverticalborderObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDverticalborderObjects1Objects = Hashtable.newFrom({"verticalborder": gdjs.inflvlCode.GDverticalborderObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.inflvlCode.GDPlayerObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBossBulletObjects1Objects = Hashtable.newFrom({"BossBullet": gdjs.inflvlCode.GDBossBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBoss1Objects1Objects = Hashtable.newFrom({"Boss1": gdjs.inflvlCode.GDBoss1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects = Hashtable.newFrom({"Particle": gdjs.inflvlCode.GDParticleObjects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBoss1Objects1Objects = Hashtable.newFrom({"Boss1": gdjs.inflvlCode.GDBoss1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.inflvlCode.GDNewObject4Objects1});gdjs.inflvlCode.eventsList1 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15422684);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueIdle");
}
}}

}


};gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects2});gdjs.inflvlCode.eventsList2 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15428108);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bullet");
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.15, "bullet");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
gdjs.inflvlCode.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects2Objects, (( gdjs.inflvlCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects2[0].getPointX("")) + 20, (( gdjs.inflvlCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects2[0].getPointY("")) + 4, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bullet");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_laser1.ogg", false, 50, 1);
}}

}


};gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.inflvlCode.GDBulletObjects2});gdjs.inflvlCode.eventsList3 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15430388);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bullet");
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.15, "bullet");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
gdjs.inflvlCode.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects2Objects, (( gdjs.inflvlCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects2[0].getPointX("")) + 20, (( gdjs.inflvlCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects2[0].getPointY("")) + 4, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bullet");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_laser1.ogg", false, 50, 1);
}}

}


};gdjs.inflvlCode.eventsList4 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueIdle");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueIdle");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "START", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause Menu");
}}

}


};gdjs.inflvlCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 1;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList6 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15411476);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("RedIdle");
}
}}

}


};gdjs.inflvlCode.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList8 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15400108);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("GreenIdle");
}
}}

}


};gdjs.inflvlCode.eventsList9 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList10 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15388692);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("PurpleIdle");
}
}}

}


};gdjs.inflvlCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("PurpleUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("PurpleIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("PurpleDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("PurpleIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList12 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15383036);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("OrangeIdle");
}
}}

}


};gdjs.inflvlCode.eventsList13 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("OrangeUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("OrangeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("OrangeDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("OrangeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList14 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15377380);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("YellowIdle");
}
}}

}


};gdjs.inflvlCode.eventsList15 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("YellowUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("YellowIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("YellowDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("YellowIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList16 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15417132);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("BlueShadeIdle");
}
}}

}


};gdjs.inflvlCode.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueShadeUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueShadeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueShadeDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("BlueShadeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList18 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15405796);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("RedShadeIdle");
}
}}

}


};gdjs.inflvlCode.eventsList19 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedShadeUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedShadeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedShadeDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("RedShadeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList20 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15394484);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("GreenShadeIdle");
}
}}

}


};gdjs.inflvlCode.eventsList21 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenShadeUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenShadeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenShadeDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("GreenShadeIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.eventsList22 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
{gdjs.inflvlCode.conditionTrue_1 = gdjs.inflvlCode.condition0IsTrue_0;
gdjs.inflvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15437708);
}
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setAnimationName("CDXIdle");
}
}}

}


};gdjs.inflvlCode.eventsList23 = function(runtimeScene) {

{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("CDXUp");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, -(60), 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("CDXIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("CDXDown");
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(0, 60, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].setAnimationName("CDXIdle");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(-(120), 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects2[i].addForce(60, 0, 0);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
{ //Subevents
gdjs.inflvlCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.inflvlCode.GDNewObject6Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.inflvlCode.GDEnemy1Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.inflvlCode.GDEnemy2Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.inflvlCode.GDNewObject5Objects1});gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.inflvlCode.GDNewObject5Objects1});gdjs.inflvlCode.eventsList24 = function(runtimeScene) {

{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.inflvlCode.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.inflvlCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.inflvlCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("verticalborder"), gdjs.inflvlCode.GDverticalborderObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 160, 80);
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].addForce(50, 0, 1);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy1Objects1[i].addForce(-(30), 0, 0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(100);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Blue_Lust.mp3", 1, true, 40, 1);
}{for(var i = 0, len = gdjs.inflvlCode.GDverticalborderObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDverticalborderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject7Objects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(200);
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject3Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "lvl complete");
}{gdjs.adMob.hideBanner();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "E3");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BossBullet"), gdjs.inflvlCode.GDBossBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.inflvlCode.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.inflvlCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.inflvlCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.inflvlCode.GDHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.inflvlCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.inflvlCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.inflvlCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.inflvlCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Particle"), gdjs.inflvlCode.GDParticleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("chunk"), gdjs.inflvlCode.GDchunkObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")) + 20, 0.05), "", 0);
}{for(var i = 0, len = gdjs.inflvlCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 30,0);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDchunkObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDchunkObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 80,0);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 48,2);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBulletObjects1[i].setZOrder(gdjs.inflvlCode.GDBulletObjects1[i].getZOrder() + (999999));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].setZOrder(gdjs.inflvlCode.GDParticleObjects1[i].getZOrder() + (99999999999999999));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy2Objects1[i].setZOrder(gdjs.inflvlCode.GDEnemy2Objects1[i].getZOrder() + (1));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject5Objects1[i].setZOrder(gdjs.inflvlCode.GDNewObject5Objects1[i].getZOrder() + (1));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setZOrder(gdjs.inflvlCode.GDPlayerObjects1[i].getZOrder() + (1));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy1Objects1[i].setZOrder(gdjs.inflvlCode.GDEnemy1Objects1[i].getZOrder() + (1));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthObjects1[i].setZOrder(gdjs.inflvlCode.GDHealthObjects1[i].getZOrder() + (1));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setZOrder(gdjs.inflvlCode.GDHealthBarObjects1[i].getZOrder() + (1));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDBossBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBossBulletObjects1[i].setZOrder(gdjs.inflvlCode.GDBossBulletObjects1[i].getZOrder() + (19898));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject4Objects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 76,0);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject6Objects1[i].setZOrder(gdjs.inflvlCode.GDNewObject6Objects1[i].getZOrder() + (999999));
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber((( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getDistanceToObject((gdjs.inflvlCode.GDNewObject7Objects1.length !== 0 ? gdjs.inflvlCode.GDNewObject7Objects1[0] : null))));
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy1Objects1[i].setZOrder(gdjs.inflvlCode.GDEnemy1Objects1[i].getZOrder() + (100));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy2Objects1[i].setZOrder(gdjs.inflvlCode.GDEnemy2Objects1[i].getZOrder() + (100));
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject5Objects1[i].setZOrder(gdjs.inflvlCode.GDNewObject5Objects1[i].getZOrder() + (100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.inflvlCode.GDEnemy1Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDEnemy1Objects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDEnemy1Objects1[i].hasNoForces() ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDEnemy1Objects1[k] = gdjs.inflvlCode.GDEnemy1Objects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDEnemy1Objects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDEnemy1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy1Objects1[i].addForceTowardPosition((( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")), (gdjs.inflvlCode.GDEnemy1Objects1[i].getPointY("")), 15, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.inflvlCode.GDEnemy2Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDEnemy2Objects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDEnemy2Objects1[i].hasNoForces() ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDEnemy2Objects1[k] = gdjs.inflvlCode.GDEnemy2Objects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDEnemy2Objects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDEnemy2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy2Objects1[i].addForceTowardPosition((( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")), (gdjs.inflvlCode.GDEnemy2Objects1[i].getPointY("")), 20, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.inflvlCode.GDNewObject5Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDNewObject5Objects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDNewObject5Objects1[i].hasNoForces() ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDNewObject5Objects1[k] = gdjs.inflvlCode.GDNewObject5Objects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDNewObject5Objects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDNewObject5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject5Objects1[i].addForceTowardPosition((( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")), (gdjs.inflvlCode.GDNewObject5Objects1[i].getPointY("")), 50, 1);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtsExt__SpaceShooterControls__ShouldFire.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BossBullet"), gdjs.inflvlCode.GDBossBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.inflvlCode.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.inflvlCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBulletObjects1[i].addForce(40, 0, 1);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDBossBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBossBulletObjects1[i].addForce(-(40), 0, 1);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject6Objects1[i].addForce(-(100), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.inflvlCode.GDEnemy1Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDEnemy1Objects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_twoTone.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(0.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.inflvlCode.GDEnemy2Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDEnemy2Objects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_twoTone.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(0.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.inflvlCode.GDNewObject5Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDNewObject5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.inflvlCode.GDNewObject6Objects1);
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject5Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_twoTone.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject6Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Particle"), gdjs.inflvlCode.GDParticleObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDParticleObjects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDParticleObjects1[i].hasAnimationEnded() ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDParticleObjects1[k] = gdjs.inflvlCode.GDParticleObjects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDParticleObjects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDParticleObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.inflvlCode.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDEnemy1Objects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_shieldDown.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.inflvlCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDEnemy2Objects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDEnemy2Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_shieldDown.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.inflvlCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDNewObject5Objects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject5Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_shieldDown.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.inflvlCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject6Objects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDNewObject6Objects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDNewObject6Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject6Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject6Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject6Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_shieldDown.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BossBullet"), gdjs.inflvlCode.GDBossBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBossBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDBossBulletObjects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBossBulletObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBossBulletObjects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBossBulletObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.inflvlCode.GDBossBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBossBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_shieldDown.ogg", false, 100, 1);
}}

}


{


{
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 80;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.inflvlCode.GDHealthBarObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setAnimationName("80");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 60;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.inflvlCode.GDHealthBarObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setAnimationName("60");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 40;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.inflvlCode.GDHealthBarObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setAnimationName("40");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 20;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.inflvlCode.GDHealthBarObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setAnimationName("20");
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.inflvlCode.GDHealthBarObjects1);
{for(var i = 0, len = gdjs.inflvlCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDHealthBarObjects1[i].setAnimationName("0");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_twoTone.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "u ded", false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


{
}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDBulletObjects1[i].getX() > (( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")) + 60 ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDBulletObjects1[k] = gdjs.inflvlCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDBulletObjects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("verticalborder"), gdjs.inflvlCode.GDverticalborderObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDverticalborderObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
/* Reuse gdjs.inflvlCode.GDverticalborderObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDverticalborderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BossBullet"), gdjs.inflvlCode.GDBossBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDPlayerObjects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBossBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDBossBulletObjects1 */
{runtimeScene.getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_shieldDown.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.inflvlCode.GDBossBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBossBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss1"), gdjs.inflvlCode.GDBoss1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.inflvlCode.GDBulletObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBoss1Objects1Objects, gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDBoss1Objects1 */
/* Reuse gdjs.inflvlCode.GDBulletObjects1 */
gdjs.inflvlCode.GDParticleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDParticleObjects1Objects, (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointX("")) + gdjs.randomInRange(0, 10), (( gdjs.inflvlCode.GDBoss1Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDBoss1Objects1[0].getPointY("")) + gdjs.randomInRange(0, 10), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDParticleObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDParticleObjects1[i].separateFromObjectsList(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDBoss1Objects1Objects, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_twoTone.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(20);
}{runtimeScene.getVariables().getFromIndex(2).sub(20);
}{for(var i = 0, len = gdjs.inflvlCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "lvl complete");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.inflvlCode.GDNewObject4Objects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
gdjs.inflvlCode.condition1IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.inflvlCode.condition0IsTrue_0.val ) {
{
gdjs.inflvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inflvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause Menu");
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause Menu");
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 4;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 5;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 6;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 7;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 8;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 9;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 10;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.inflvlCode.eventsList23(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "E3");
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.inflvlCode.GDNewObject5Objects1);
gdjs.inflvlCode.GDNewObject6Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject6Objects1Objects, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointX("")) - 10, (( gdjs.inflvlCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDNewObject5Objects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "E3");
}}

}


{


gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
gdjs.inflvlCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) >= 150;
}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.inflvlCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("chunk"), gdjs.inflvlCode.GDchunkObjects1);
gdjs.inflvlCode.GDEnemy1Objects1.length = 0;

gdjs.inflvlCode.GDEnemy2Objects1.length = 0;

gdjs.inflvlCode.GDNewObject5Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(300, 350), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(300, 350), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy1Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(300, 350), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(290, 300), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(290, 300), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDEnemy2Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(290, 300), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(250, 290), gdjs.randomInRange(25, 60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.inflvlCode.mapOfGDgdjs_46inflvlCode_46GDNewObject5Objects1Objects, (( gdjs.inflvlCode.GDchunkObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDchunkObjects1[0].getPointX("")) + gdjs.randomInRange(250, 290), gdjs.randomInRange(25, 60), "");
}{for(var i = 0, len = gdjs.inflvlCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDNewObject7Objects1[i].setX((( gdjs.inflvlCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.inflvlCode.GDPlayerObjects1[0].getPointX("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDPlayerObjects1[i].getY() <= 0 ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDPlayerObjects1[k] = gdjs.inflvlCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDPlayerObjects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.inflvlCode.GDPlayerObjects1);

gdjs.inflvlCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inflvlCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.inflvlCode.GDPlayerObjects1[i].getY() >= 60 ) {
        gdjs.inflvlCode.condition0IsTrue_0.val = true;
        gdjs.inflvlCode.GDPlayerObjects1[k] = gdjs.inflvlCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.inflvlCode.GDPlayerObjects1.length = k;}if (gdjs.inflvlCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inflvlCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.inflvlCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.inflvlCode.GDPlayerObjects1[i].setY(30);
}
}}

}


{


{
}

}


};

gdjs.inflvlCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inflvlCode.GDPlayerObjects1.length = 0;
gdjs.inflvlCode.GDPlayerObjects2.length = 0;
gdjs.inflvlCode.GDPlayerObjects3.length = 0;
gdjs.inflvlCode.GDPlayerObjects4.length = 0;
gdjs.inflvlCode.GDBulletObjects1.length = 0;
gdjs.inflvlCode.GDBulletObjects2.length = 0;
gdjs.inflvlCode.GDBulletObjects3.length = 0;
gdjs.inflvlCode.GDBulletObjects4.length = 0;
gdjs.inflvlCode.GDParticleObjects1.length = 0;
gdjs.inflvlCode.GDParticleObjects2.length = 0;
gdjs.inflvlCode.GDParticleObjects3.length = 0;
gdjs.inflvlCode.GDParticleObjects4.length = 0;
gdjs.inflvlCode.GDHealthObjects1.length = 0;
gdjs.inflvlCode.GDHealthObjects2.length = 0;
gdjs.inflvlCode.GDHealthObjects3.length = 0;
gdjs.inflvlCode.GDHealthObjects4.length = 0;
gdjs.inflvlCode.GDEnemy1Objects1.length = 0;
gdjs.inflvlCode.GDEnemy1Objects2.length = 0;
gdjs.inflvlCode.GDEnemy1Objects3.length = 0;
gdjs.inflvlCode.GDEnemy1Objects4.length = 0;
gdjs.inflvlCode.GDHealthBarObjects1.length = 0;
gdjs.inflvlCode.GDHealthBarObjects2.length = 0;
gdjs.inflvlCode.GDHealthBarObjects3.length = 0;
gdjs.inflvlCode.GDHealthBarObjects4.length = 0;
gdjs.inflvlCode.GDchunkObjects1.length = 0;
gdjs.inflvlCode.GDchunkObjects2.length = 0;
gdjs.inflvlCode.GDchunkObjects3.length = 0;
gdjs.inflvlCode.GDchunkObjects4.length = 0;
gdjs.inflvlCode.GDEnemy2Objects1.length = 0;
gdjs.inflvlCode.GDEnemy2Objects2.length = 0;
gdjs.inflvlCode.GDEnemy2Objects3.length = 0;
gdjs.inflvlCode.GDEnemy2Objects4.length = 0;
gdjs.inflvlCode.GDbossbattleObjects1.length = 0;
gdjs.inflvlCode.GDbossbattleObjects2.length = 0;
gdjs.inflvlCode.GDbossbattleObjects3.length = 0;
gdjs.inflvlCode.GDbossbattleObjects4.length = 0;
gdjs.inflvlCode.GDBoss1Objects1.length = 0;
gdjs.inflvlCode.GDBoss1Objects2.length = 0;
gdjs.inflvlCode.GDBoss1Objects3.length = 0;
gdjs.inflvlCode.GDBoss1Objects4.length = 0;
gdjs.inflvlCode.GDNewObject2Objects1.length = 0;
gdjs.inflvlCode.GDNewObject2Objects2.length = 0;
gdjs.inflvlCode.GDNewObject2Objects3.length = 0;
gdjs.inflvlCode.GDNewObject2Objects4.length = 0;
gdjs.inflvlCode.GDBossBulletObjects1.length = 0;
gdjs.inflvlCode.GDBossBulletObjects2.length = 0;
gdjs.inflvlCode.GDBossBulletObjects3.length = 0;
gdjs.inflvlCode.GDBossBulletObjects4.length = 0;
gdjs.inflvlCode.GDverticalborderObjects1.length = 0;
gdjs.inflvlCode.GDverticalborderObjects2.length = 0;
gdjs.inflvlCode.GDverticalborderObjects3.length = 0;
gdjs.inflvlCode.GDverticalborderObjects4.length = 0;
gdjs.inflvlCode.GDNewObject4Objects1.length = 0;
gdjs.inflvlCode.GDNewObject4Objects2.length = 0;
gdjs.inflvlCode.GDNewObject4Objects3.length = 0;
gdjs.inflvlCode.GDNewObject4Objects4.length = 0;
gdjs.inflvlCode.GDNewObject3Objects1.length = 0;
gdjs.inflvlCode.GDNewObject3Objects2.length = 0;
gdjs.inflvlCode.GDNewObject3Objects3.length = 0;
gdjs.inflvlCode.GDNewObject3Objects4.length = 0;
gdjs.inflvlCode.GDNewObject5Objects1.length = 0;
gdjs.inflvlCode.GDNewObject5Objects2.length = 0;
gdjs.inflvlCode.GDNewObject5Objects3.length = 0;
gdjs.inflvlCode.GDNewObject5Objects4.length = 0;
gdjs.inflvlCode.GDNewObject6Objects1.length = 0;
gdjs.inflvlCode.GDNewObject6Objects2.length = 0;
gdjs.inflvlCode.GDNewObject6Objects3.length = 0;
gdjs.inflvlCode.GDNewObject6Objects4.length = 0;
gdjs.inflvlCode.GDNewObject7Objects1.length = 0;
gdjs.inflvlCode.GDNewObject7Objects2.length = 0;
gdjs.inflvlCode.GDNewObject7Objects3.length = 0;
gdjs.inflvlCode.GDNewObject7Objects4.length = 0;

gdjs.inflvlCode.eventsList24(runtimeScene);
return;

}

gdjs['inflvlCode'] = gdjs.inflvlCode;
