gdjs.SettingsCode = {};
gdjs.SettingsCode.GDNewObjectObjects1= [];
gdjs.SettingsCode.GDNewObjectObjects2= [];
gdjs.SettingsCode.GDNewObject2Objects1= [];
gdjs.SettingsCode.GDNewObject2Objects2= [];
gdjs.SettingsCode.GDNewObject3Objects1= [];
gdjs.SettingsCode.GDNewObject3Objects2= [];
gdjs.SettingsCode.GDNewObject4Objects1= [];
gdjs.SettingsCode.GDNewObject4Objects2= [];
gdjs.SettingsCode.GDNewObject5Objects1= [];
gdjs.SettingsCode.GDNewObject5Objects2= [];
gdjs.SettingsCode.GDNewObject6Objects1= [];
gdjs.SettingsCode.GDNewObject6Objects2= [];
gdjs.SettingsCode.GDnObjects1= [];
gdjs.SettingsCode.GDnObjects2= [];
gdjs.SettingsCode.GDyObjects1= [];
gdjs.SettingsCode.GDyObjects2= [];
gdjs.SettingsCode.GDNewObject7Objects1= [];
gdjs.SettingsCode.GDNewObject7Objects2= [];
gdjs.SettingsCode.GDNewObject8Objects1= [];
gdjs.SettingsCode.GDNewObject8Objects2= [];
gdjs.SettingsCode.GDNewObject9Objects1= [];
gdjs.SettingsCode.GDNewObject9Objects2= [];
gdjs.SettingsCode.GDNewObject10Objects1= [];
gdjs.SettingsCode.GDNewObject10Objects2= [];
gdjs.SettingsCode.GDNewObject11Objects1= [];
gdjs.SettingsCode.GDNewObject11Objects2= [];
gdjs.SettingsCode.GDNewObject12Objects1= [];
gdjs.SettingsCode.GDNewObject12Objects2= [];
gdjs.SettingsCode.GDNewObject13Objects1= [];
gdjs.SettingsCode.GDNewObject13Objects2= [];
gdjs.SettingsCode.GDNewObject14Objects1= [];
gdjs.SettingsCode.GDNewObject14Objects2= [];
gdjs.SettingsCode.GDNewObject15Objects1= [];
gdjs.SettingsCode.GDNewObject15Objects2= [];
gdjs.SettingsCode.GDNewObject16Objects1= [];
gdjs.SettingsCode.GDNewObject16Objects2= [];
gdjs.SettingsCode.GDNewObject17Objects1= [];
gdjs.SettingsCode.GDNewObject17Objects2= [];
gdjs.SettingsCode.GDNewObject18Objects1= [];
gdjs.SettingsCode.GDNewObject18Objects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.SettingsCode.GDNewObject2Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.SettingsCode.GDNewObject3Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.SettingsCode.GDNewObject7Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject8Objects1Objects = Hashtable.newFrom({"NewObject8": gdjs.SettingsCode.GDNewObject8Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.SettingsCode.GDNewObject9Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject10Objects1Objects = Hashtable.newFrom({"NewObject10": gdjs.SettingsCode.GDNewObject10Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject13Objects1Objects = Hashtable.newFrom({"NewObject13": gdjs.SettingsCode.GDNewObject13Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.SettingsCode.GDNewObject18Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject16Objects1Objects = Hashtable.newFrom({"NewObject16": gdjs.SettingsCode.GDNewObject16Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDyObjects1Objects = Hashtable.newFrom({"y": gdjs.SettingsCode.GDyObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDnObjects1Objects = Hashtable.newFrom({"n": gdjs.SettingsCode.GDnObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.SettingsCode.GDNewObject2Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SettingsCode.GDNewObject3Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) - (5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.SettingsCode.GDNewObject7Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "export");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.SettingsCode.GDNewObject8Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject8Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene6");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.SettingsCode.GDNewObject9Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject9Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene5");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.SettingsCode.GDNewObject10Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject10Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene8");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject13"), gdjs.SettingsCode.GDNewObject13Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject13Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "login");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.SettingsCode.GDNewObject18Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject18Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene9");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject16"), gdjs.SettingsCode.GDNewObject16Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject16Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "joyconr", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.SettingsCode.GDNewObject5Objects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getGlobalVolume(runtimeScene));
}{for(var i = 0, len = gdjs.SettingsCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNewObject5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("y"), gdjs.SettingsCode.GDyObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "custom server bulshit");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("n"), gdjs.SettingsCode.GDnObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.SettingsCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.SettingsCode.GDNewObject8Objects1);
gdjs.copyArray(runtimeScene.getObjects("n"), gdjs.SettingsCode.GDnObjects1);
gdjs.copyArray(runtimeScene.getObjects("y"), gdjs.SettingsCode.GDyObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNewObject7Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNewObject8Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDnObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDnObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.adMob.hideBanner();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "namechk");
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.SettingsCode.GDNewObject12Objects1);
{for(var i = 0, len = gdjs.SettingsCode.GDNewObject12Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNewObject12Objects1[i].setString("Guest");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.SettingsCode.GDNewObject12Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("str", "name", runtimeScene, runtimeScene.getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.SettingsCode.GDNewObject12Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNewObject12Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "namechk");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("str", "hasname", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "namechk");
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewObjectObjects1.length = 0;
gdjs.SettingsCode.GDNewObjectObjects2.length = 0;
gdjs.SettingsCode.GDNewObject2Objects1.length = 0;
gdjs.SettingsCode.GDNewObject2Objects2.length = 0;
gdjs.SettingsCode.GDNewObject3Objects1.length = 0;
gdjs.SettingsCode.GDNewObject3Objects2.length = 0;
gdjs.SettingsCode.GDNewObject4Objects1.length = 0;
gdjs.SettingsCode.GDNewObject4Objects2.length = 0;
gdjs.SettingsCode.GDNewObject5Objects1.length = 0;
gdjs.SettingsCode.GDNewObject5Objects2.length = 0;
gdjs.SettingsCode.GDNewObject6Objects1.length = 0;
gdjs.SettingsCode.GDNewObject6Objects2.length = 0;
gdjs.SettingsCode.GDnObjects1.length = 0;
gdjs.SettingsCode.GDnObjects2.length = 0;
gdjs.SettingsCode.GDyObjects1.length = 0;
gdjs.SettingsCode.GDyObjects2.length = 0;
gdjs.SettingsCode.GDNewObject7Objects1.length = 0;
gdjs.SettingsCode.GDNewObject7Objects2.length = 0;
gdjs.SettingsCode.GDNewObject8Objects1.length = 0;
gdjs.SettingsCode.GDNewObject8Objects2.length = 0;
gdjs.SettingsCode.GDNewObject9Objects1.length = 0;
gdjs.SettingsCode.GDNewObject9Objects2.length = 0;
gdjs.SettingsCode.GDNewObject10Objects1.length = 0;
gdjs.SettingsCode.GDNewObject10Objects2.length = 0;
gdjs.SettingsCode.GDNewObject11Objects1.length = 0;
gdjs.SettingsCode.GDNewObject11Objects2.length = 0;
gdjs.SettingsCode.GDNewObject12Objects1.length = 0;
gdjs.SettingsCode.GDNewObject12Objects2.length = 0;
gdjs.SettingsCode.GDNewObject13Objects1.length = 0;
gdjs.SettingsCode.GDNewObject13Objects2.length = 0;
gdjs.SettingsCode.GDNewObject14Objects1.length = 0;
gdjs.SettingsCode.GDNewObject14Objects2.length = 0;
gdjs.SettingsCode.GDNewObject15Objects1.length = 0;
gdjs.SettingsCode.GDNewObject15Objects2.length = 0;
gdjs.SettingsCode.GDNewObject16Objects1.length = 0;
gdjs.SettingsCode.GDNewObject16Objects2.length = 0;
gdjs.SettingsCode.GDNewObject17Objects1.length = 0;
gdjs.SettingsCode.GDNewObject17Objects2.length = 0;
gdjs.SettingsCode.GDNewObject18Objects1.length = 0;
gdjs.SettingsCode.GDNewObject18Objects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
