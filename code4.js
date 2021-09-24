gdjs.New_32scene3Code = {};
gdjs.New_32scene3Code.GDNewObject2Objects1= [];
gdjs.New_32scene3Code.GDNewObject2Objects2= [];
gdjs.New_32scene3Code.GDNewObjectObjects1= [];
gdjs.New_32scene3Code.GDNewObjectObjects2= [];
gdjs.New_32scene3Code.GDNewObject3Objects1= [];
gdjs.New_32scene3Code.GDNewObject3Objects2= [];
gdjs.New_32scene3Code.GDNewObject4Objects1= [];
gdjs.New_32scene3Code.GDNewObject4Objects2= [];
gdjs.New_32scene3Code.GDNewObject5Objects1= [];
gdjs.New_32scene3Code.GDNewObject5Objects2= [];
gdjs.New_32scene3Code.GDNewObject6Objects1= [];
gdjs.New_32scene3Code.GDNewObject6Objects2= [];
gdjs.New_32scene3Code.GDNewObject7Objects1= [];
gdjs.New_32scene3Code.GDNewObject7Objects2= [];
gdjs.New_32scene3Code.GDNewObject8Objects1= [];
gdjs.New_32scene3Code.GDNewObject8Objects2= [];
gdjs.New_32scene3Code.GDNewObject9Objects1= [];
gdjs.New_32scene3Code.GDNewObject9Objects2= [];

gdjs.New_32scene3Code.conditionTrue_0 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene3Code.GDNewObjectObjects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene3Code.GDNewObject2Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject8Objects1Objects = Hashtable.newFrom({"NewObject8": gdjs.New_32scene3Code.GDNewObject8Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.New_32scene3Code.GDNewObject6Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.New_32scene3Code.GDNewObject5Objects1});gdjs.New_32scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene3Code.GDNewObjectObjects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Connect", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene3Code.GDNewObject2Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Host", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.New_32scene3Code.GDNewObject8Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject8Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene3Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene3Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32scene3Code.GDNewObject6Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene3Code.GDNewObject5Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://sites.google.com/view/galaxy-protectors-help-webpage/how-to-play-multiplayer", runtimeScene);
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene3Code.GDNewObject7Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject7Objects1[i].setString("default server");
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene3Code.GDNewObject7Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject7Objects1[i].setString("custom server");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene3Code.GDNewObject7Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject7Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.New_32scene3Code.GDNewObject7Objects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene3Code.GDNewObject9Objects1);
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{gdjs.adMob.hideBanner();
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject9Objects1[i].hide();
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = !(gdjs.evtTools.firebase.auth.isAuthentified());
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene3Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene3Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene3Code.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene3Code.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene3Code.GDNewObject9Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject9Objects1[i].hide(false);
}
}}

}


};

gdjs.New_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene3Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject9Objects2.length = 0;

gdjs.New_32scene3Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene3Code'] = gdjs.New_32scene3Code;
