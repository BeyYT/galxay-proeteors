gdjs.New_32scene9Code = {};
gdjs.New_32scene9Code.GDNewObjectObjects1= [];
gdjs.New_32scene9Code.GDNewObjectObjects2= [];
gdjs.New_32scene9Code.GDNewObject2Objects1= [];
gdjs.New_32scene9Code.GDNewObject2Objects2= [];
gdjs.New_32scene9Code.GDNewObject3Objects1= [];
gdjs.New_32scene9Code.GDNewObject3Objects2= [];
gdjs.New_32scene9Code.GDNewObject4Objects1= [];
gdjs.New_32scene9Code.GDNewObject4Objects2= [];
gdjs.New_32scene9Code.GDNewObject5Objects1= [];
gdjs.New_32scene9Code.GDNewObject5Objects2= [];
gdjs.New_32scene9Code.GDNewObject7Objects1= [];
gdjs.New_32scene9Code.GDNewObject7Objects2= [];
gdjs.New_32scene9Code.GDNewObject6Objects1= [];
gdjs.New_32scene9Code.GDNewObject6Objects2= [];
gdjs.New_32scene9Code.GDNewObject8Objects1= [];
gdjs.New_32scene9Code.GDNewObject8Objects2= [];
gdjs.New_32scene9Code.GDNewObject9Objects1= [];
gdjs.New_32scene9Code.GDNewObject9Objects2= [];
gdjs.New_32scene9Code.GDNewObject10Objects1= [];
gdjs.New_32scene9Code.GDNewObject10Objects2= [];
gdjs.New_32scene9Code.GDNewObject11Objects1= [];
gdjs.New_32scene9Code.GDNewObject11Objects2= [];
gdjs.New_32scene9Code.GDNewObject12Objects1= [];
gdjs.New_32scene9Code.GDNewObject12Objects2= [];
gdjs.New_32scene9Code.GDNewObject13Objects1= [];
gdjs.New_32scene9Code.GDNewObject13Objects2= [];

gdjs.New_32scene9Code.conditionTrue_0 = {val:false};
gdjs.New_32scene9Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene9Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene9Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.New_32scene9Code.GDNewObject6Objects1});gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.New_32scene9Code.GDNewObject7Objects1});gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.New_32scene9Code.GDNewObject12Objects1});gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject13Objects1Objects = Hashtable.newFrom({"NewObject13": gdjs.New_32scene9Code.GDNewObject13Objects1});gdjs.New_32scene9Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.New_32scene9Code.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.New_32scene9Code.GDNewObject11Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene9Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene9Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene9Code.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.New_32scene9Code.GDNewObject8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene9Code.GDNewObject9Objects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.window.getWindowInnerWidth());
}{runtimeScene.getVariables().get("h").setNumber(gdjs.evtTools.window.getWindowInnerHeight());
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("h")));
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject3Objects1[i].setX((( gdjs.New_32scene9Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32scene9Code.GDNewObject2Objects1[0].getX()) + 50);
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject4Objects1[i].setX((( gdjs.New_32scene9Code.GDNewObject3Objects1.length === 0 ) ? 0 :gdjs.New_32scene9Code.GDNewObject3Objects1[0].getX()) + 20);
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject8Objects1[i].setString((( gdjs.New_32scene9Code.GDNewObject10Objects1.length === 0 ) ? "" :gdjs.New_32scene9Code.GDNewObject10Objects1[0].getString()));
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject9Objects1[i].setString((( gdjs.New_32scene9Code.GDNewObject11Objects1.length === 0 ) ? "" :gdjs.New_32scene9Code.GDNewObject11Objects1[0].getString()));
}
}{runtimeScene.getVariables().getFromIndex(1).setString((( gdjs.New_32scene9Code.GDNewObject10Objects1.length === 0 ) ? "" :gdjs.New_32scene9Code.GDNewObject10Objects1[0].getString()));
}{runtimeScene.getVariables().get("hset").setString((( gdjs.New_32scene9Code.GDNewObject11Objects1.length === 0 ) ? "" :gdjs.New_32scene9Code.GDNewObject11Objects1[0].getString()));
}}

}


{


gdjs.New_32scene9Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene9Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene9Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.New_32scene9Code.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.New_32scene9Code.GDNewObject11Objects1);
{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject10Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject11Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject11Objects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32scene9Code.GDNewObject6Objects1);

gdjs.New_32scene9Code.condition0IsTrue_0.val = false;
gdjs.New_32scene9Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene9Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene9Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene9Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene9Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.New_32scene9Code.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.New_32scene9Code.GDNewObject11Objects1);
{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject10Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject11Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject11Objects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene9Code.GDNewObject7Objects1);

gdjs.New_32scene9Code.condition0IsTrue_0.val = false;
gdjs.New_32scene9Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene9Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene9Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene9Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene9Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.New_32scene9Code.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.New_32scene9Code.GDNewObject11Objects1);
{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject10Objects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.New_32scene9Code.GDNewObject11Objects1.length ;i < len;++i) {
    gdjs.New_32scene9Code.GDNewObject11Objects1[i].activate(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.New_32scene9Code.GDNewObject12Objects1);

gdjs.New_32scene9Code.condition0IsTrue_0.val = false;
gdjs.New_32scene9Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene9Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene9Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene9Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene9Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("hset")), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject13"), gdjs.New_32scene9Code.GDNewObject13Objects1);

gdjs.New_32scene9Code.condition0IsTrue_0.val = false;
gdjs.New_32scene9Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene9Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene9Code.mapOfGDgdjs_46New_9532scene9Code_46GDNewObject13Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene9Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene9Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene9Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


};

gdjs.New_32scene9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene9Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene9Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene9Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject9Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject10Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject10Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject11Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject11Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject12Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject12Objects2.length = 0;
gdjs.New_32scene9Code.GDNewObject13Objects1.length = 0;
gdjs.New_32scene9Code.GDNewObject13Objects2.length = 0;

gdjs.New_32scene9Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene9Code'] = gdjs.New_32scene9Code;
