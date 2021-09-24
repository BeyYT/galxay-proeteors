gdjs.u_32dedCode = {};
gdjs.u_32dedCode.GDNewObjectObjects1= [];
gdjs.u_32dedCode.GDNewObjectObjects2= [];
gdjs.u_32dedCode.GDNewObject22Objects1= [];
gdjs.u_32dedCode.GDNewObject22Objects2= [];
gdjs.u_32dedCode.GDNewObject2Objects1= [];
gdjs.u_32dedCode.GDNewObject2Objects2= [];
gdjs.u_32dedCode.GDNewObject32Objects1= [];
gdjs.u_32dedCode.GDNewObject32Objects2= [];
gdjs.u_32dedCode.GDNewObject3Objects1= [];
gdjs.u_32dedCode.GDNewObject3Objects2= [];
gdjs.u_32dedCode.GDNewObject4Objects1= [];
gdjs.u_32dedCode.GDNewObject4Objects2= [];
gdjs.u_32dedCode.GDNewObject5Objects1= [];
gdjs.u_32dedCode.GDNewObject5Objects2= [];
gdjs.u_32dedCode.GDNewObject6Objects1= [];
gdjs.u_32dedCode.GDNewObject6Objects2= [];

gdjs.u_32dedCode.conditionTrue_0 = {val:false};
gdjs.u_32dedCode.condition0IsTrue_0 = {val:false};
gdjs.u_32dedCode.condition1IsTrue_0 = {val:false};
gdjs.u_32dedCode.condition2IsTrue_0 = {val:false};


gdjs.u_32dedCode.mapOfGDgdjs_46u_9532dedCode_46GDNewObject22Objects1Objects = Hashtable.newFrom({"NewObject22": gdjs.u_32dedCode.GDNewObject22Objects1});gdjs.u_32dedCode.mapOfGDgdjs_46u_9532dedCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.u_32dedCode.GDNewObject2Objects1});gdjs.u_32dedCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject22"), gdjs.u_32dedCode.GDNewObject22Objects1);

gdjs.u_32dedCode.condition0IsTrue_0.val = false;
gdjs.u_32dedCode.condition1IsTrue_0.val = false;
{
gdjs.u_32dedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.u_32dedCode.mapOfGDgdjs_46u_9532dedCode_46GDNewObject22Objects1Objects, runtimeScene, true, false);
}if ( gdjs.u_32dedCode.condition0IsTrue_0.val ) {
{
gdjs.u_32dedCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.u_32dedCode.condition1IsTrue_0.val) {
/* Reuse gdjs.u_32dedCode.GDNewObject22Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.u_32dedCode.GDNewObject32Objects1);
{gdjs.adMob.loadVideo("ca-app-pub-1132060138444437/5010082709", "", true);
}{for(var i = 0, len = gdjs.u_32dedCode.GDNewObject22Objects1.length ;i < len;++i) {
    gdjs.u_32dedCode.GDNewObject22Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.u_32dedCode.GDNewObject32Objects1.length ;i < len;++i) {
    gdjs.u_32dedCode.GDNewObject32Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene7");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.u_32dedCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.u_32dedCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.u_32dedCode.GDNewObject5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.u_32dedCode.condition0IsTrue_0.val = false;
{
gdjs.u_32dedCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.u_32dedCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject22"), gdjs.u_32dedCode.GDNewObject22Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.u_32dedCode.GDNewObject32Objects1);
{for(var i = 0, len = gdjs.u_32dedCode.GDNewObject22Objects1.length ;i < len;++i) {
    gdjs.u_32dedCode.GDNewObject22Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.u_32dedCode.GDNewObject32Objects1.length ;i < len;++i) {
    gdjs.u_32dedCode.GDNewObject32Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.u_32dedCode.condition0IsTrue_0.val = false;
{
gdjs.u_32dedCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.u_32dedCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 640, 480);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.u_32dedCode.GDNewObject2Objects1);

gdjs.u_32dedCode.condition0IsTrue_0.val = false;
gdjs.u_32dedCode.condition1IsTrue_0.val = false;
{
gdjs.u_32dedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.u_32dedCode.mapOfGDgdjs_46u_9532dedCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.u_32dedCode.condition0IsTrue_0.val ) {
{
gdjs.u_32dedCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.u_32dedCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", true);
}}

}


};

gdjs.u_32dedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.u_32dedCode.GDNewObjectObjects1.length = 0;
gdjs.u_32dedCode.GDNewObjectObjects2.length = 0;
gdjs.u_32dedCode.GDNewObject22Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject22Objects2.length = 0;
gdjs.u_32dedCode.GDNewObject2Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject2Objects2.length = 0;
gdjs.u_32dedCode.GDNewObject32Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject32Objects2.length = 0;
gdjs.u_32dedCode.GDNewObject3Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject3Objects2.length = 0;
gdjs.u_32dedCode.GDNewObject4Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject4Objects2.length = 0;
gdjs.u_32dedCode.GDNewObject5Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject5Objects2.length = 0;
gdjs.u_32dedCode.GDNewObject6Objects1.length = 0;
gdjs.u_32dedCode.GDNewObject6Objects2.length = 0;

gdjs.u_32dedCode.eventsList0(runtimeScene);
return;

}

gdjs['u_32dedCode'] = gdjs.u_32dedCode;
